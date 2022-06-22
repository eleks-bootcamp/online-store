"use strict";

import CardsList from './components/card-list/02-js-task/cards-list.js';
import Pagination from './components/pagination/02-js-task/pagination.js';

const BACKEND_URL = 'https://online-store.bootcamp.place/api/'

class OnlineStorePage {
  constructor (products = []) {
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

  async loadData (pageNumber) {
    this.url.searchParams.set('_page', pageNumber);
    const response = await fetch(this.url);
    const products = await response.json();

    return products;
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
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements / this.pageSize);

    const cardList = new CardsList(this.products);
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

      this.update(pageIndex + 1);
    });
  }

  async update (pageNumber) {
    const data = await this.loadData(pageNumber);

    this.components.cardList.update(data);
  }
}

const page = new OnlineStorePage();

const rootElement = document.querySelector('#root');
rootElement.append(page.element);
