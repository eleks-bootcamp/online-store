import CardsList from './cards-list.js';
import Pagination from './pagination.js';
import Search from './searchbox.js';
import Sidebar from './sidebar.js';
import Cart from './cart.js';


const BECKEND_URL = 'https://online-store.bootcamp.place/api/';

// 'products?_page=1&_limit=12'

export default class OnlineStorePage {
  constructor () {
       this.pageSize = 9;
       this.products = [];

    this.productsUrl = new URL('products', BECKEND_URL);
    this.productsUrl.searchParams.set('_limit', this.pageSize);

    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();
    this.initEventListeners();
    this.update(1);
  }
  async loadData (pageNumber) {
    this.productsUrl.searchParams.set('_page',pageNumber);
    const response = await fetch(this.productsUrl);
    const products = await response.json();
 
        return products;  
  };
     
  getTemplate () {
     return `
       <main>
          <header>
              <p class="logo">Online Store</p>
              <div data-element="cart"> </div> 
          </header>
          <div class="content">
              <div data-element = "sideBar"> </div>
              <section>
                  <div data-element = "search"> </div>
                  <div data-element = "cardsList"> </div>
                  <div data-element = "pagination"> </div>
              </section>
          </div> 
       </main>
    `;
  }

  initComponents () {
   
    const totalElements = 100;
    const totalPages= Math.ceil(totalElements / this.pageSize);

    const search = new Search ();
    const cardList = new CardsList (this.products);
    const pagination = new Pagination({
      activePageIndex: 0, 
      totalPages: totalPages
    });
    const sideBar = new Sidebar();
    const cart = new Cart();
 

    this.components.search = search;
    this.components.cardList = cardList;
    this.components.pagination = pagination;
    this.components.sideBar = sideBar;
    this.components.cart = cart;
  
  };
  renderComponents () {

    const searchContainer = this.element.querySelector('[data-element = "search"]');
    const cardsContainer  = this.element.querySelector('[data-element = "cardsList"]');
    const paginationContainer  = this.element.querySelector('[data-element = "pagination"]');
    const sideBarContainer = this.element.querySelector('[data-element = "sideBar"]');
    const cartContainer = this.element.querySelector('[data-element = "cart"]');

    searchContainer.append(this.components.search.element);
    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
    sideBarContainer.append(this.components.sideBar.element);
    cartContainer.append(this.components.cart.element);
  };
    
  render () {

    const wrapper = document.createElement('div');
    
    wrapper.innerHTML = this.getTemplate();
    
    this.element = wrapper.firstElementChild;
  };

  initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = Number(event.detail);

            this.update(pageIndex + 1);
     
    });

  };
   async update (pageNumber) {
    
    const data = await this.loadData(pageNumber);
 

    this.components.cardList.update(data);
   };

  }





     