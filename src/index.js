"use strict";

import SideBar from "./components/side-bar/side-bar.js";
import DoubleSlider from "./components/double-slider/double-slider.js";
import SearchBox from "./components/search-box/search-box.js";
import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
import Cart from "./components/cart/cart.js";
import { API } from "./API/api.js";

export const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
class OnLineStorePage {

  state = {
    pageNumber: 1,
    pageSize: 9,
    categories: [],
    brands: [],
    lowerPrice: 0,
    higherPrice: 85000,
    lowerRating: 0,
    higherRating: 5,
    search: '',
    productsInCart: {}
  };

  constructor() {
    this.products = [];
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();
    this.updateProducts();
  }

  getTemplate() {
    return `
      <div class="container">
        <header>
          <div class="header-wrapper">
            <div class="logo">Online Store</div>
            <button class="button button_header" data-element="cartBtn">
              <i class="icon-cart"></i>
              Cart
              <span data-element="counter"></span>
            </button>
          </div>
        </header>
        <div class="row">
          <div class="col-12 col-s-6 col-l-3">
            <div class="side-bar" data-element="sideBar">
              <button class="button button_filters" data-element="clearFilters">Clear all filters</button>
            </div>
          </div>
          <div class="col-12 col-s-6 col-l-9">
            <div class="search-box" data-element="searchBox"></div>
            <div class="cards-list" data-element="cardsList"></div>
            <div data-element="pagination"></div>
          </div>
        </div>
      </div>
    `;
  }

  initComponents() {
    // TODO: remove hardcoded value
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements/ this.state.pageSize);

    const sideBar = new SideBar();
    const doubleSlider = new DoubleSlider();
    const searchBox = new SearchBox();
    const cardsList = new CardsList(this.products);
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages
    });
    const cart = new Cart(this.state.productsInCart);

    this.components.sideBar = sideBar;
    this.components.doubleSlider = doubleSlider;
    this.components.searchBox = searchBox;
    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
    this.components.cart = cart;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  renderComponents() {
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');
    const searchBoxContainer = this.element.querySelector('[data-element="searchBox"]');
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    sideBarContainer.prepend(this.components.sideBar.element);
    searchBoxContainer.append(this.components.searchBox.element);
    cardsContainer.append(this.components.cardsList.element);
    paginationContainer.append(this.components.pagination.element);
    this.element.append(this.components.cart.element);
  }

  initEventListeners() {
    this.components.pagination.element.addEventListener('page-changed', e => {
      const pageIndex = e.detail;
      this.state.pageNumber = pageIndex + 1;

      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('categories-selection', e => {
      const categories = e.detail;

      this.state.categories = categories;
      this.updateProducts();
    });

    this.components.sideBar.element.addEventListener('brands-selection', e => {
      const brands = e.detail;

      this.state.brands = brands;
      this.updateProducts();
    });

    document.addEventListener('lowerPrice-selection', e => {
      const lowerPrice = e.detail;

      this.state.lowerPrice = lowerPrice;
      this.updateProducts();
    });

    document.addEventListener('higherPrice-selection', e => {
      const higherPrice = e.detail;

      this.state.higherPrice = higherPrice;
      this.updateProducts();
    });

    document.addEventListener('lowerRating-selection', e => {
      const lowerRating = e.detail;

      this.state.lowerRating = lowerRating;
      this.updateProducts();
    });

    document.addEventListener('higherRating-selection', e => {
      const higherRating = e.detail;

      this.state.higherRating = higherRating;
      this.updateProducts();
    });

    this.components.searchBox.element.addEventListener('input-text', e => {
      const text = e.detail;

      this.state.search = text;
      this.updateProducts();
    });

    document.addEventListener('add-product', e => {
      const id = e.detail.id;

      if (this.state.productsInCart[id]) {
        this.state.productsInCart[id].quantity += 1;
      } else {
        this.state.productsInCart[id] = {
          quantity: 1,
          product: e.detail
        };
      }

      this.renderBtnCounter();
    });

    document.addEventListener('minus-selection', e => {
      const id = e.detail;

      if (this.state.productsInCart[id] && this.state.productsInCart[id].quantity > 1) {
        this.state.productsInCart[id].quantity -= 1;
        this.components.cart.renderCartsCard();
      } else {
        delete this.state.productsInCart[id];
        this.components.cart.renderCartsCard();
      }

      this.renderBtnCounter();
    });

    document.addEventListener('plus-selection', e => {
      const id = e.detail;

      if (this.state.productsInCart[id]) {
        this.state.productsInCart[id].quantity += 1;
        this.components.cart.renderCartsCard();
      }

      this.renderBtnCounter();
    });

    const rootElement = document.getElementById('root');
    rootElement.addEventListener('click', e => {
      if (e.target.dataset.element === 'clearFilters') {
        this.clearFilters();
      }
    });

    const cart = this.components.cart.element.querySelector('[data-element="cart"]');
    const cartBnt = this.element.querySelector('[data-element="cartBtn"]');
    cartBnt.addEventListener('click', () => {
      cart.classList.remove('hidden');
      this.components.cart.renderCartsCard();
    });
  }

  renderBtnCounter() {
    const quantity = Object.values(this.state.productsInCart)
                           .map(item => item.quantity)
                           .reduce((prev, curr) => prev + curr, 0);

    const counter = this.element.querySelector('[data-element="counter"]');

    if (quantity <= 0) {
      counter.textContent = "";
    } else {
      counter.textContent = quantity;
    }
  }

  getUrlWithParams() {
    const productsUrl = new URL('products', BACKEND_URL);
    const { pageSize, pageNumber } = this.state;

    productsUrl.searchParams.set('_page', String(pageNumber));
    productsUrl.searchParams.set('_limit', String(pageSize));

    const { categories } = this.state;
    if (categories.length) {
      categories.forEach (category => {
        productsUrl.searchParams.append('category', category);
      });
    }

    const { brands } = this.state;
    if(brands.length) {
      brands.forEach (brand => {
        productsUrl.searchParams.append('brand', brand);
      });
    }

    const { lowerPrice } = this.state;
    productsUrl.searchParams.append('price_gte', String(lowerPrice));

    const { higherPrice } = this.state;
    productsUrl.searchParams.append('price_lte', String(higherPrice));

    const { lowerRating } = this.state;
    productsUrl.searchParams.append('rating_gte', String(lowerRating));

    const { higherRating } = this.state;
    productsUrl.searchParams.append('rating_lte', String(higherRating));

    const { search } = this.state;

    if(search.length) {
      productsUrl.searchParams.append('q', search);
    }

    return productsUrl;
  }

  async updateProducts() {
    const url = this.getUrlWithParams();
    const products = await API.loadProducts(url);

    this.components.cardsList.update(products);
  }

  clearFilters() {
    this.state.categories = [];
    this.state.brands = [];
    this.state.lowerPrice = 0;
    this.state.higherPrice = 85000;
    this.state.lowerRating = 0;
    this.state.higherRating = 5;
    this.state.search = '';
    this.components.searchBox.element.querySelector('[data-element="searchInput"]').value = '';

    const allInputs = this.components.sideBar.element.querySelectorAll('input');
    allInputs.forEach(input => {
      input.checked = false;
    });

    // this.components.doubleSlider.clearSlider();

    if (this.state.pageNumber === 1 ) {
      this.updateProducts();
    } else {
      this.components.pagination.clearPagination();
    }
  }
}

const page = new OnLineStorePage();
const root = document.querySelector('#root');

root.append(page.element);
