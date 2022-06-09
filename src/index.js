"use strict";

import Card from "./components/product-card/card.js";
import Pagination from "./components/pagination/pagination.js";

const product = {
  "id": "76w0hz7015kkr9kjkav",
  "images": [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
  ],
  "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  "rating": 2.89,
  "price": 15999,
  "category": "laptops",
  "brand": "acer"
};

const monitor = {
  "id": "r5pyc7y91djkr9kjkav",
  "images": [
    "https://content.rozetka.com.ua/goods/images/big_tile/73891904.jpg"
  ],
  "title": "Монитор 27\" Dell S2721DGFA (210-AXRQ)",
  "rating": 2.13,
  "price": 6900,
  "category": "monitors",
  "brand": "dell"
};

class OnLineStorePage {
  constructor() {
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();
  }

  getTemplate() {
    return `
      <div data-element="card"></div>
      <div data-element="pagination"></div>
    `;
  }

  initComponents() {
    const card = new Card (product);
    const pagination = new Pagination({
      activePageIndex: 0
    });

    this.components.card = card;
    this.components.pagination = pagination;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  renderComponents() {
    const cardContainer = this.element.querySelector('[data-element="card"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    cardContainer.append(this.components.card.element);
    paginationContainer.append(this.components.pagination.element);
  }
}

const page = new OnLineStorePage();
const rootElement = document.querySelector('#root');

rootElement.append(page.element);
page.components.card.update(monitor);
