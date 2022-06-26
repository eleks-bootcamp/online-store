//import Card from './card.js';

import CardsList from './cards-list.js';
import Pagination from './pagination.js';

const BACKEND_URL = 'https://online-store.bootcamp.place/api/'
export default class OnlineStorePage {
  constructor () {
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

  getTemplate () {
return `
<div>
<div data-element="cardList">
<!-- Card component -->
</div>
<div data-element="pagination">
<!-- Pagination component -->
</div>
</div>
`;
  }

initComponents () {

  const totalElements = 100;
  const totalPages = Math.ceil(totalElements / this.pageSize);

  const cardList = new CardsList(this.products);
  const pagination = new Pagination({
    activePageIndex: 0,
    totalPages
  });
  this.components.cardList = cardList;
  this.components.pagination = pagination;
}

renderComponents () {
const cardsContainer = this.element.querySelector('[data-element="cardList"]');
const paginationContainer = this.element.querySelector('[data-element="pagination"]');

cardsContainer.append(this.components.cardList.element);
paginationContainer.append(this.components.pagination.element);

}

  render () {
    const wrapper = document.createElement ('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
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

