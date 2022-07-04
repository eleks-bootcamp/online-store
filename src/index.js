"use strict";

/* import SearchBox from './components/search-box/02-js-task/search-box.js'; */
import CardsList from './components/card-list/cards-list.js';
import Pagination from './components/pagination/pagination.js';
import SideBar from './components/side-bar/02-js-task/side-bar.js';
import { API } from './API/api.js';

export const BACKEND_URL = 'https://online-store.bootcamp.place/api/';

class OnlineStorePage {
  state = {
    pageNumber: 1,
    pageSize: 9,
    categories: [],
    brands: []
  };

  constructor () {
    this.products = [];
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();

    this.updateProducts();
  }

  getTeamplate () {
    return  `
      <div class="container">
        <div class="row">
          <div class="col-12 col-s-6 col-l-3">
            <div class="side-bar" data-element="sideBar">
              <button class="button-clear" data-element="clearFilters">CLEAR ALL FILTERS</button>
            </div>
          </div>
          <div class="col-12 col-s-6 col-l-9">
            <div class="card-list__wrapper" data-element="cardsList"></div>
            <div data-element="pagination"></div>
          </div>
        </div>
      </div>
    `;
  }

  initComponents () {
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements / this.state.pageSize);

    const cardList = new CardsList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages: totalPages
    });
    const sideBar = new SideBar();

    this.components.cardList = cardList;
    this.components.pagination = pagination;
    this.components.sideBar = sideBar;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }

  renderComponents () {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');

    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
    sideBarContainer.prepend(this.components.sideBar.element);
  }

  initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      this.state.pageNumber = pageIndex + 1;
      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('categories-selection', event => {
      const categories = event.detail;

      this.state.categories = categories;
      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('brands-selection', event => {
      const brands = event.detail;

      this.state.brands = brands;
      this.updateProducts();
    });

    const rootElement = document.getElementById('root');

    rootElement.addEventListener('click', event => {
      if (event.target.dataset.element === 'clearFilters') {
        this.clearFilters();
      }
    });
  }

  getUrlWithParams () {
    const productsUrl = new URL('products', BACKEND_URL);
    const { pageSize, pageNumber } = this.state;

    productsUrl.searchParams.set('_page', String(pageNumber));
    productsUrl.searchParams.set('_limit', String(pageSize));

    const { categories } = this.state;
    if (categories.length) {
      categories.forEach(category => {
        productsUrl.searchParams.append('category', category);
      });
    }

    const { brands } = this.state;
    if (brands.length) {
      brands.forEach(brand => {
        productsUrl.searchParams.append('brand', brand);
      });
    }

    return productsUrl;
  }

  async updateProducts () {
    const url = this.getUrlWithParams();
    const products = await API.loadProducts(url);

    this.components.cardList.update(products);
  }

  clearFilters () {
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

const page = new OnlineStorePage();

const rootElement = document.querySelector('#root');
rootElement.append(page.element);
