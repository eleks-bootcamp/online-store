import Card from '../components/card/02-js-task/index.js';
import CardsList from '../components/cards-list/02-js-task/index.js';
import FiltersList from '../components/filters-list/02-js-task/index.js';
import Pagination from '../components/pagination/02-js-task/index.js';

export class SitePage {
  _controller = null;
  constructor(pageClass = 'main-page') {
    this.pageClass = pageClass;
  }

  set controller(val) {
    this._controller = val;
  }

  getPageSections() {
    return [this.header, this.leftPan, this.mainPan, this.rightPan, this.footer];
  }

  insert(parentElement = null) {
    if (!parentElement) return;

    const pageSections = this.getPageSections();
    console.log('inserting page to',  parentElement);
    console.log('pageSections :', pageSections);
    this.render();

    for (const pageSection of pageSections)
    {
      if (pageSection) {
        console.log(pageSection );
        parentElement.appendChild(pageSection);
      }
    }
  }

  render() {
  }

  update() {
  }
}

export class StorePage extends SitePage {
  #cardsList = null;
  #pagination = null;
  #filtersLists = null;

  #renderFiltersLists() {
    const result = [];
    const addFilterList = (title = '') => {
      result.push(new FiltersList ({title: title, list: []}));
    }
    addFilterList('Category');
    addFilterList('Brands');

    const elements = result.map((filterList) => {return filterList.element});
    this.leftPan.append(...elements);
    this.#filtersLists = result;
  }

  render() {
    this.#cardsList = new CardsList('cards-list');
    this.mainPan.appendChild(this.#cardsList.element);
    this.#pagination = new Pagination({
      totalPages: 1,
      currentPage: 1
    }, 12);
    this.footer.appendChild(this.#pagination.element);

    this.#renderFiltersLists();
    this.#addEventListeners();
  }

  #addEventListeners() {
    this.#pagination.element.addEventListener('page-changed', event => {
      console.log('event', event);
      if (this._controller) {
        this._controller.setPage(Number(event.currentPage));
      }
    });

    for (const filterList of this.#filtersLists) {
      filterList.element.addEventListener('change', event => {
      console.log('event', event.target.value);
      if (this._controller) {
        this.controller.filterChanged(null, event.target.value);
      }
    });
  }

  }

  update(state) {
    if (this.#cardsList) {
      this.#cardsList.update(state.products);
    }
    if (this.#pagination) {
      this.#pagination.update(state);
    }
    if (this.#filtersLists) {
      for (const filterList of this.#filtersLists) {
        filterList.update(state);
      }
    }
  }
}

export class PageBuilder {

  init(page = new SitePage()) {
    this.page = page;
  }

  createElem(tagName = '', classes = ['']) {
    if (!tagName) return;

    const baseClassStr = (!classes||0===classes.length) ? '' : `${this.page.pageClass}-${classes[0]} `;
    const el = document.createElement(tagName);
    el.className = (baseClassStr + classes.join(' ')).trim();
    return el;
  }

  addHeaderSection(tagName = 'section', classes = ['header-section']) {
    this.page.header = this.createElem(tagName, classes);
  }

  addLeftPanel(tagName = 'aside', classes = ['left-pan-section']) {
    this.page.leftPan = this.createElem(tagName, classes);
  }

  addMainPanel(tagName = 'main', classes = ['main-pan-section']) {
    this.page.mainPan = this.createElem(tagName, classes);
  }

  addRightPanel(tagName = 'aside', classes = ['right-pan-section']) {
    this.page.rightPan = this.createElem(tagName, classes);
  }

  addFooterSection(tagName = 'section', classes = ['footer-section']) {
    this.page.footer = this.createElem(tagName, classes);
  }

  getPage() {
    return this.page;
  }
}
