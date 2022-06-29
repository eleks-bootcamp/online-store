"use strict";

import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
import SideBar from "./components/side-bar/side-bar.js";
import { API } from "./components/API/api.js";

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
class OnLineStorePage {
  constructor() {
    this.pageSize = 25;
    this.products = [];

    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageSize);
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();

    this.update(1);
  }

  getTemplate() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12 col-s-6 col-l-3">
            <div class="side-bar" data-element="sideBar">
              <button class="button button_filters">Clear all filters</button>
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
    const totalPages = Math.ceil(totalElements/ this.pageSize);

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

      this.update(pageIndex + 1);
    });
  }

  async update(pageNumber) {
    const products = await API.loadProducts(pageNumber, this.url);

    this.components.cardsList.update(products);
  }
}

const page = new OnLineStorePage();
const root = document.querySelector('#root');

root.append(page.element);
