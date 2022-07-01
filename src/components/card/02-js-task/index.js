
import CardList from './cards-list.js';
import Pagination from './pagination.js';


const BACKEND_URL = 'https://online-store.bootcamp.place/api/';

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
        <div data-element="card-list">
          <!-- Crad component -->
        </div>
        <div data-element="pagination">
          <!-- Pagination component -->
        </div>
      </div>
    `;
  }

  initComponents () {
    const totalElements = 100; //remove hardcoded value
    const totalPages = Math.ceil(totalElements / this.pageSize);

    const cardList = new CardList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages: totalPages
    });

    this.components.cardList = cardList;
    this.components.pagination = pagination;

  }

  renderComponents () {
    const cardsContainer = this.element.querySelector('[data-element="card-list"]');
    const paginationContainer = this.element.querySelector('[data-element ="pagination"]');

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
      const pageIdex = event.detail;

      this.update(pageIdex + 1);

    });

  }

  async update (pageNumber) {
    const data = await this.loadData(pageNumber);

    this.components.cardList.update(data);

  }

}
