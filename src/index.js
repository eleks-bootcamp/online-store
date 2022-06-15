"use strict";

/* import Card from './components/card/02-js-task/card.js'; */
import CardsList from './components/card-list/02-js-task/cards-list.js';
import Pagination from './components/pagination/02-js-task/pagination.js';
import { products } from './products.js';

class OnlineStorePage {
  constructor (products = []) {
    this.pageSize = 3;
    this.products = products;
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();
    this.initEventListeners();
  }

  getTeamplate () {
    return  `
      <div>
        <div class="card-list-wrapper" data-element="cardsList"></div>
        <div data-element="pagination"></div>
      </div>
    `;
  }

  initComponents () {
    const totalPages = Math.ceil(this.products.length / this.pageSize);

    const cardList = new CardsList(this.products.slice(0, this.pageSize));
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages: totalPages
    });

    this.components.cardList = cardList;
    this.components.pagination = pagination;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }

  renderComponents () {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');
    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
  }

  initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      const start = pageIndex * this.pageSize;
      const end = start + this.pageSize;
      const data = this.products.slice(start, end);

      this.components.cardList.update(data);
    });
  }
}

const page = new OnlineStorePage(products);

const rootElement = document.querySelector('#root');

rootElement.append(page.element);

