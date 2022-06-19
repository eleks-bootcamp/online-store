//import Card from "./card.js";

import CardsList from "./card-list.js";
import Pagination from "./pagination.js";

const product = {
  id: "76w0hz7015kkr9kjkav",
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg",
  ],
  title:
    "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  rating: 2.89,
  price: 15999,
  category: "laptops",
  brand: "acer",
};

const BACKEND_URL = 'https://online-store.bootcamp.place/api/'

export default class OnlineStorePage {
  constructor () {
    this.pageSize = 9
    this.url = new URL('products', BACKEND_URL)
    this.url.searchParams.set('_limit', this.pageSize);
    this.products = []
    this.components = {};
    this.initComponents();
    this.render();
    this.renderComponents();
    this.initEventListeners();
    this.update(1);
  };

  async LoadData (pageNumber) {
    this.url.searchParams.set('_page', pageNumber);
    const response = await fetch(this.url)
    const products = await response.json();

    return products
  }

  getTemplate () {
    return `
      <div>
        <div data-element="cardsList"></div>
        <div data-element="pagination"></div>
      </div>
    `;
  }

  initComponents () {
    const constTotalElements = 100
    const totalPages = Math.ceil(constTotalElements / this.pageSize)
    const cardsList = new CardsList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages
    });

    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
  }

  renderComponents () {
    const cardsListContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    cardsListContainer.append(this.components.cardsList.element);
    paginationContainer.append(this.components.pagination.element);
  }

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;
      this.update(pageIndex + 1);
    })

  }

  async update (pageNumber) {
    const data = await this.LoadData(pageNumber)
    this.components.cardsList.update(data)
  }
}