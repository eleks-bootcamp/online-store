
import CardsList from './cards-list.js';
import Pagination from './pagination.js';
const BACKEND_URL = 'https://online-store.bootcamp.place/api/';

      export default class OnlineStorePage {
        // constructor (products = []) {
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
        async loadData (pageNumber) {
          this.url.searchParams.set('_page', pageNumber);
          const response = await fetch(this.url);
          const products = await response.json();
          console.log('products', products);
          return products;
        }

        getTemplate () {
          return `
            <div>
              <div data-element="cardsList">
                <!-- Cards List component -->
              </div>
              <div data-element="pagination">
                <!-- Pagination component -->
              </div>
            </div>
          `;
        }
        initComponents () {
          const totalElements = 100;
          const totalPages = Math.ceil(totalElements / this.pageSize);
          const cardList = new CardsList(this.products);
          const pagination = new Pagination({
            // totalElements: 35,
            activePageIndex: 0,
            totalPages
            // pageSize: 8,
          });
          this.components.cardList = cardList;
          this.components.pagination = pagination;
        }
        renderComponents () {
          const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
          const paginationContainer = this.element.querySelector('[data-element="pagination"]');
          cardsContainer.append(this.components.cardList.element);
          paginationContainer.append(this.components.pagination.element);
        }

        render () {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = this.getTemplate();
          this.element = wrapper.firstElementChild;
        }
        initEventListeners () {
          this.components.pagination.element.addEventListener('page-changed', event => {
            const pageIndex = event.detail;
            this.update(pageIndex + 1);


          });
        }

      async update (pageNamber) {
        // const start = pageIndex * this.pageSize;
        //     const end = start + this.pageSize;
        //     const data = this.products.slice(start, end);
            const data = await this.loadData(pageNamber);
            this.components.cardList.update(data);
      }
      }
// class OnlineStorePage {
//   constructor () {
//     this.render();
//   }

//   getTemplate () {
//     return `
//       <div>
//         <div></div>
//         <div></div>
//       </div>
//     `;
//   }

//   render () {
    // const wrapper = document.createElement('div');

    // wrapper.innerHTML = this.getTemplate();

//     this.element = wrapper.firstElementChild;
//   }
// }

// }
// import Card from "./card.js";
// import Pagination from "./pagination.js";
// const product = {
//   id: "76w0hz7015kkr9kjkav",
//   images: [
//     "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
//     "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg",
//   ],
//   title:
//     "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
//   rating: 2.89,
//   price: 15999,
//   category: "laptops",
//   brand: "acer",
// };

