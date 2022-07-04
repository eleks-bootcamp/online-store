"use strict";

import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
import SideBar from "./components/side-bar/side-bar.js";
import { API } from "./API/api.js";

export const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
class OnLineStorePage {

  state = {
    pageNumber: 1,
    pageSize: 9,
    categories: [],
    brands: []
  };

  constructor() {
    this.products = [];
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();
    this.updateProducts();
  }

  getTemplate() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12 col-s-6 col-l-3">
            <div class="side-bar" data-element="sideBar">
              <button class="button button_filters" data-element="clearFilters">Clear all filters</button>
            </div>
          </div>
          <div class="col-12 col-s-6 col-l-9">
            <div class="cards-list" data-element="cardsList"></div>
            <div data-element="pagination"></div>
          </div>
        </div>
      </div>
    `;
  }

  initComponents() {
    // TODO: remove hardcoded value
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements/ this.state.pageSize);

    const sideBar = new SideBar();
    const cardsList = new CardsList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages
    });

    this.components.sideBar = sideBar;
    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  renderComponents() {
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    sideBarContainer.prepend(this.components.sideBar.element);
    cardsContainer.append(this.components.cardsList.element);
    paginationContainer.append(this.components.pagination.element);
  }

  initEventListeners() {
    this.components.pagination.element.addEventListener('page-changed', e => {
      const pageIndex = e.detail;
      this.state.pageNumber = pageIndex + 1;

      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('categories-selection', e => {
      const categories = e.detail;

      this.state.categories = categories;
      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('brands-selection', e => {
      const brands = e.detail;

      this.state.brands = brands;
      this.updateProducts();
    });

    const rootElement = document.getElementById('root');
    rootElement.addEventListener('click', e => {
      if (e.target.dataset.element === 'clearFilters') {
        this.clearFilters();
      }
    });
  }

  getUrlWithParams() {
    const productsUrl = new URL('products', BACKEND_URL);
    const { pageSize, pageNumber } = this.state;

    productsUrl.searchParams.set('_page', String(pageNumber));
    productsUrl.searchParams.set('_limit', String(pageSize));

    const { categories } = this.state;
    if (categories.length) {
      categories.forEach (category => {
        productsUrl.searchParams.append('category', category);
      });
    }

    const { brands } = this.state;
    if(brands.length) {
      brands.forEach (brand => {
        productsUrl.searchParams.append('brand', brand);
      });
    }

    return productsUrl;
  }

  async updateProducts() {
    const url = this.getUrlWithParams();
    const products = await API.loadProducts(url);

    this.components.cardsList.update(products);
  }

  clearFilters() {
    this.state.categories = [];
    this.state.brands = [];

    const allInputs = this.components.sideBar.element.querySelectorAll('input');
    allInputs.forEach(input => {
      input.checked = false;
    });


    if (this.state.pageNumber === 1) {
      this.updateProducts();
    } else {
      this.components.pagination.clearPagination();
    }
  }
}

const page = new OnLineStorePage();
const root = document.querySelector('#root');

root.append(page.element);
