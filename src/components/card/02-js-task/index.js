//import Card from "./card.js";

import CardsList from "./card-list.js";
import Pagination from "./pagination.js";
import SearchBox from "./search-box.js";
import SideBar from "./side-bar.js";

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

  async LoadData (pageNumber, enabledCheckbox, enabledBrands) {
    console.log(pageNumber, enabledCheckbox, enabledBrands)
    this.url.searchParams.set('_page', pageNumber);
    this.url.searchParams.set('_limit', this.pageSize)
    if(enabledCheckbox !== undefined) {
      this.url.searchParams.delete('category', enabledCheckbox);
      for (let i of enabledCheckbox) {
        this.url.searchParams.append('category', i)
      }
      this.components.pagination.setPage(0)
    }

    if(enabledBrands !== undefined) {
      this.url.searchParams.delete('brand', enabledBrands);
      for (let iterator of enabledBrands) {
        this.url.searchParams.append('brand', iterator)
      }
    }

    const response = await fetch(this.url)
    const products = await response.json();
    
    return products
  }

  getTemplate () {
    return `
    <div>
      <div class="header">
        <div class="site-name">Online Store</div>
        <button class="cart">
        <i class="bi bi-cart"></i>
        cart</button>
      </div>
      <div class="container">
        <div class="col-left-side col-xl-3 col-m-4 col-s-6" data-element="sideBar">
        </div>
        <div class="right-side col-xl-9 col-m-8 col-s-6">
          <div class="col-12 right-head" data-element="saearchBox">
          </div>
          <div data-element="cardsList"></div>
          <div data-element="pagination"></div>
        </div>
      </div>
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
    const saearchBox = new SearchBox("");
    const sideBar = new SideBar();

    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
    this.components.saearchBox = saearchBox;
    this.components.sideBar = sideBar;
  }

  renderComponents () {
    const cardsListContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');
    const saearchBoxContainer = this.element.querySelector('[data-element="saearchBox"]');
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');

    cardsListContainer.append(this.components.cardsList.element);
    paginationContainer.append(this.components.pagination.element);
    saearchBoxContainer.append(this.components.saearchBox.element);
    sideBarContainer.append(this.components.sideBar.element);
  }

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  initEventListeners () {
    let pageIndex = 0
    let enabledCheckbox = []
    let enabledBrands = []
    this.components.pagination.element.addEventListener('page-changed', event => {
       pageIndex = event.detail;
       this.update({pageNumber: pageIndex + 1})
    })
 
    this.components.sideBar.element.addEventListener('checkbox-change', event => {
       enabledCheckbox = event.detail;
       this.update({enabledCheckbox: enabledCheckbox})
    })

    this.components.sideBar.element.addEventListener('checkbox-brand', event => {
       enabledBrands = event.detail;
       this.update({enabledBrands: enabledBrands})
    })

    //this.update(pageIndex, enabledCheckbox, enabledBrands);
  }


  async update ({pageNumber = 0, enabledCheckbox, enabledBrands}) {
    let data = await this.LoadData(pageNumber, enabledCheckbox, enabledBrands)
    this.components.cardsList.update(data)
    
    if(enabledCheckbox !== undefined || enabledBrands !== undefined) {
    const url = new URL('products', BACKEND_URL)
    if(enabledCheckbox !== undefined) {
      url.searchParams.delete('category', enabledCheckbox);
      for (let i of enabledCheckbox) {
        url.searchParams.append('category', i)
      }
      this.components.pagination.setPage(0)
    }

    if(enabledBrands !== undefined) {
      url.searchParams.delete('brand', enabledBrands);
      for (let iterator of enabledBrands) {
        url.searchParams.append('brand', iterator)
      }
      this.components.pagination.setPage(0)
    }

    const response = await fetch(url)
    const products = await response.json();
    console.log (products)

    const length = Math.ceil(Object.keys(products).length / 9)
    console.log(length)
    this.components.pagination.update(length)
   }
  }
}