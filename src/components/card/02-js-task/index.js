    import Card from './card.js';
    import Pagination from './pagination.js';
    //API http://online-store.bootcamp.place/api/products
    const product = {
      "id": "76w0hz7015kkr9kjkav",
      "images": [
        "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
        "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
      ],
      "title": "Ноутбук Acer Aspire 33 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
      "rating": 2.89,
      "price": 15999,
      "category": "laptops",
      "brand": "acer"
    };


export default class OnlineStorePage{

  constructor(){
    this.components={};
    this.initComponents();
    this.render();
    this.renderComponents();
  }
  getTemplate(){
    return`
    <div>
      <div data-element="card">
      <!-- Card component -->

      </div>
      <div data-element="pagination">
      <!-- Pagination -->
      </div>
    </div>
    `;
  }
  initComponents(){
    const card = new Card(product);
    const pagination = new Pagination({
      totalElements:35,
      activePageIndex:1,
      pageSize: 8,
    });
    this.components.card = card;
    this.components.pagination = pagination;
  }
  renderComponents(){
    const cardComponent = this.element.querySelector('[data-element="card"]');
    const paginationComponent = this.element.querySelector('[data-element="pagination"]');
    cardComponent.append(this.components.card.componentElement);
    paginationComponent.append(this.components.pagination.element);
  }
  render() {
    const wraper = document.createElement('div');
    wraper.innerHTML = this.getTemplate();
    this.element = wraper.firstElementChild;
  }

}


