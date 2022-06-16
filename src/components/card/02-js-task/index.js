import CardsList from "./cards-list.js";
import Pagination from './pagination.js';


export default class OnlineStorePage {
  constructor(products = []) {
    this.pageSize = 3;
    this.products = products;
    this.components = {};

    this.initComponents();
    this.render();
    this.renderComponents();

    this.initEventListeners();
  }

  getTemplate() {
    return `
    <div>
        <div data-element="cardsList">
        <!-- Card component -->
        </div>

        <div data-element="pagination">
        <!-- Pagination component -->
        </div>
    </div>
    `;
  }

  initComponents() {
    const totalPages = Math.ceil(this.products.length / this.pageSize);

    const cardList = new CardsList(this.products.slice(0, this.pageSize));
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages: totalPages,
    });

    this.components.cardList = cardList;
    this.components.pagination = pagination;
  }

  renderComponents() {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }

  initEventListeners(){
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      //[0, 1, 2] | pageIndex=0 pageSize=3
      //[3, 4, 5] | pageIndex=1 pageSize=3
      //[6, 7] | pageIndex=2 pageSize=3

      const start = pageIndex * this.pageSize;
      const end = start + this.pageSize;
      const data = this.products.slice(start, end);

      this.components.cardList.update(data);
    })
  }
}
