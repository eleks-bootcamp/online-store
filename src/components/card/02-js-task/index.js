
import CardsList from '../../cards-list/02-js-task/cards-list.js';
import Pagination from '../../pagination/02-js-task/pagination.js';
import Search from '../../search-box/02-js-task/index.js';

const BACKEND_URL = 'https://online-store.bootcamp.place/api/'
export default class OnLineStorePage {
  constructor () {
    this.pageSize = 9;
    this.products = [];

    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageSize);
    
    
    this.components = {};

    this.initComponents();
    this.myRender();
    this.renderComponents();

    this.initEventListeners();
    this.update(1)
  }

  async loadData(pageNumber){
    this.url.searchParams.set('_page', pageNumber)

    const response = await fetch(this.url);
    const products = await response.json();

    
     
    return products;
  }

  getMyTemplate () {
    return `
    <div>
      <div class="header">
       <div class="logo"></div> <div >
      </div>
        <div data-element="searchBox">
          <!-- SearchBox component -->
        <div data-element>
        <div 
      <div data-element="searchBox">
        <!-- SearchBox component -->
      <div>

      <div data-element="cardsList">
        <!-- Card component -->        
        </div>
        <div data-element="pagination">
        <!-- Pagination component -->
      </div>
    </div>
    `;
  };

  

  initComponents() {
    //TODO : remove hardcode value        this.products.length 
      const searchBox = new Search ()
      const totalElements = 100;
      const totalPages = Math.ceil(totalElements/ this.pageSize)
      const cardsList = new CardsList(this.products);
      const pagination = new Pagination({
        activePageIndex: 0,
        totalPages
      });
      this.components.searchBox = searchBox;
      this.components.cardsList = cardsList;
      this.components.pagination = pagination; 
  };

  renderComponents () {
      const searchBoxContainer = this.element.querySelector('[data-element="searchBox"');
      const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
      const paginationContainer = this.element.querySelector('[data-element="pagination"]');
      searchBoxContainer.append(this.components.searchBox.element)
      cardsContainer.append(this.components.cardsList.element);
      paginationContainer.append(this.components.pagination.element);
  };

  myRender () {
      const wrapper = document.createElement('div');

      wrapper.innerHTML = this.getMyTemplate();
      
      this.element = wrapper.firstElementChild;
  };

  initEventListeners() {
      this.components.pagination.element.addEventListener('page-changed', event => {
        const pageNumber = event.detail;

      this.update(pageNumber + 1)
      });
  };

  async update(pageNumber){
    const data = await this.loadData(pageNumber)

    this.components.cardsList.update(data)
  }

};

  




