"use strict";

/* import SearchBox from './components/search-box/02-js-task/search-box.js'; */
import CardsList from './components/card-list/cards-list.js';
import Pagination from './components/pagination/pagination.js';
import SideBar from './components/side-bar/02-js-task/side-bar.js';
import { API } from './components/API/api.js';

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
class OnlineStorePage {
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

  getTeamplate () {
    return  `
      <div class="container">
        <div class="row">
          <div class="col-12 col-s-6 col-l-3">
            <div class="side-bar__wrapper">
              <div class="side-bar" data-element="sideBar"></div>
              <button class="button-clear">CLEAR ALL FILTERS</button>
            </div>
          </div>
          <div class="col-12 col-s-6 col-l-9">
            <div class="card-list__wrapper" data-element="cardsList"></div>
            <div data-element="pagination"></div>
          </div>
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
      totalPages: totalPages
    });
   /*  const search = new SearchBox(); */
    const sideBar = new SideBar();

    /* this.components.searchBox = search; */
    this.components.cardList = cardList;
    this.components.pagination = pagination;
    this.components.sideBar = sideBar;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }

  renderComponents () {
    /* const searchBoxContainer = this.element.querySelector('[data-element="searchBox"]'); */
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');

    /* searchBoxContainer.append(this.components.searchBox.element); */
    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
    sideBarContainer.prepend(this.components.sideBar.element);
  }

  initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      this.update(pageIndex + 1);
    });
  }

  async update (pageNumber) {
    const products = await API.loadProducts(pageNumber, this.url);

    this.components.cardList.update(products);
  }
}

const page = new OnlineStorePage();

const rootElement = document.querySelector('#root');
rootElement.append(page.element);
