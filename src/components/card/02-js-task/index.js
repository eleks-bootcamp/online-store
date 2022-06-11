// import Card from './card.js';
import CardsList from './cards-list.js';
import Pagination from './pagination.js';

const product = {
  id: "76w0hz7015kkr9kjkav",
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
  ],
  title: "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  rating: 2.89,
  price: 15999,
  category: "laptops",
  brand: "acer"
};
// const monitor = {
//   id: "w73oaydowenkr9kjkav",
//   images: [
//   "https://content1.rozetka.com.ua/goods/images/big_tile/178050370.jpg"
//   ],
//   title: "Монитор 23.8 BenQ GW2475H (9H.LFELA.TBE)",
//   rating: 5,
//   price: 3800,
//   category: "monitors",
//   brand: "benq"
// };
// const page = new OnlineStorePage();
// const someElement = document.querySelector('#root');
// someElement.append(card.ComponentElement);
// someElement.append(pagination.element);
export default class OnlineStorePage {


  constructor () {
    this.products=this.products
    this.components = {};
    this.initComponents();
    this.render();
    this.renderComponents();
  }

  getTeamplate () {
    return `
      <div>
        <div data-element="card">
        <!--CardComponent-->
        </div>
        <div data-element="pagination">
        <!-- Pagination Component -->
        </div>
      </div>
    `;
  }

  initComponents () {
  const cardList = new CardsList(product);
  const pagination = new Pagination ({
    activePageIndex: 2,
});
  this.components.cardList = cardList;
  this.components.pagination = pagination;
  }

  renderComponents () {
    const cardContainer = this.element.querySelector('[data-element="card"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');
    cardContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);

  }
  render () {
    const wrapper = document.createElement ('div');
    wrapper.innerHTML = this.getTeamplate ();

    this.element = wrapper.firstElementChild;
  }
}
