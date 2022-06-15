"use strict";

// import Card from "./components/product-card/card.js";
import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
import { products } from "./products.js";

class OnLineStorePage {
  constructor(products) {
    this.pageSize = 3;
    this.products = products;
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();
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
    const totalPages = Math.ceil(this.products.length / this.pageSize);

    const cardsList = new CardsList(this.products.slice(0, this.pageSize));
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

      const start = pageIndex * this.pageSize;
      const end = start + this.pageSize;

      this.components.cardsList.update(this.products.slice(start, end));
    });
  }
}

const page = new OnLineStorePage(products);
const root = document.querySelector('#root');

root.append(page.element);

// page.components.card.update(monitor);
