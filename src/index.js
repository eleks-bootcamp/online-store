"use strict";

// import Card from "./components/product-card/card.js";
import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
// import { products } from "./products.js";

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
class OnLineStorePage {
  constructor() {
    this.pageSize = 9;
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
      <div>
        <div class="cards-list" data-element="cardsList"></div>
        <div data-element="pagination"></div>
      </div>
    `;
  }

  initComponents() {
    // TODO: remove hardcoded value
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements/ this.pageSize);

    const cardsList = new CardsList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages
    });

    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  renderComponents() {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

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
    const data = await this.loadData(pageNumber);

    this.components.cardsList.update(data);
  }

  async loadData(pageNumber) {
    this.url.searchParams.set('_page', pageNumber);

    const response = await fetch(this.url);
    const products = await response.json();

    return products;
  }
}

const page = new OnLineStorePage();
const root = document.querySelector('#root');

root.append(page.element);

// page.components.card.update(monitor);
