import Pagination from './pagination.js';
import CardsList from './cards-list.js';
import SearchBox from './search-box.js';
import SideBar from './side-bar.js';
import Title from './title.js';

//products?_page=1&_limit=8
const  BACKEND_URL ='https://online-store.bootcamp.place/api/';
export default class OnlineStorePage {
  constructor () {
    this.pageSize = 9;//задаємо дефолтну кількість продуктів(карток) на сторінці
    this.products = [];
    this.bar = 'div';
    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageSize);

    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();

    this.update(1);
  }




   async loadData(pageNumber){

    this.url.searchParams.set('_page', pageNumber);
    const response = await fetch(this.url);
    const products = await response.json();



    return products;
   }

  getTemplate () { //метод який створює порожні діви куди ми будемо закидувати наші елементи сторінки
    return `
      <div class="Grid-layout">
        <div data-element="title" class="Grid-layout1"></div>
        <div data-element="sideBar" class="Grid-layout2"></div>
        <div data-element="searchBox" class="Grid-layout3"></div>
        <div data-element="cardsList" class="Grid-layout4"></div>
        <div data-element="pagination" class="Grid-layout5"></div>
       </div>
  `;
  }

  initComponents(){

  const totalElements = 100;
  const totalPages = Math.ceil(totalElements / this.pageSize);//обрахунок кільскості сторінок

  const title = new Title();
  const sideBar = new SideBar();
  const searchBox = new SearchBox();
  const cardList = new CardsList(this.products);
  const pagination = new Pagination({
    activePageIndex : 0,
    totalPages: totalPages,
    });

    this.components.title = title;
    this.components.sideBar = sideBar;
    this.components.searchBox = searchBox;
    this.components.cardList = cardList;
    this.components.pagination = pagination;
  }

  renderComponents () {

    const mainTitle = this.element.querySelector('[data-element="title"]');
    const sideBarContainer = this.element.querySelector('[data-element="sideBar"]');
    const searchBoxContainer = this.element.querySelector('[data-element="searchBox"]');
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    mainTitle.append(this.components.title.element);
    sideBarContainer.append(this.components.sideBar.element);
    searchBoxContainer.append(this.components.searchBox.element);
    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
  }

  render () {

    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
  initEventListeners(){

    this.components.pagination.element.addEventListener('page-changed', event =>{
      const pageIndex = event.detail;

      this.update(pageIndex + 1);
    });
  }

  async update(pageNumber){

    const data = await this.loadData(pageNumber);
    this.components.cardList.update(data);
  }
}

