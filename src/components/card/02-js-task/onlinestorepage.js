import CardsList from './cards-list.js';
import Pagination from './pagination.js';
//products?_page=1&_limit=8

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';

export default class OnlineStorePage {
  constructor () {
    this.products = [];

    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageNumber)

    this.pageSize = 9;
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();

    this.update(1)
  }

  async loadData (pageNumber) {
    this.url.searchParams.set('_page', pageNumber)

    const response = await fetch(this.url);
    const products = await response.json();

    console.log('products', products)

    return products;
  }

  getTemplate () {
    return `
      <div>
        <div data-element="cardsList">
           <!-- Cards List component--!>
          </div>
        <div data-element="pagination">
            <!-- Pagination component--!>
         </div>
      </div>
    `;
  }

  initComponents () {
    const totalElements = 100;

    const totalPages = Math.ceil(totalElements / this.pageSize);

    const cardList = new CardsList(this.products.slice(0, this.pageSize));
    const pagination = new Pagination({
      activePageIndex : 0,
      totalPages
    })

    this.components.cardList = cardList;
    this.components.pagination = pagination;
  }

  renderComponents () {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');

    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    cardsContainer.append(this.components.cardList.element);

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
    });
    }

    async update (pageNumber) {
     const data = await this.loadData(pageNumber);

     this.components.cardList.update(data);
    }
};
