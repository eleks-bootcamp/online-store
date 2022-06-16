// index.js это вся страница, и в ней необх укозать все компоненты которые на ней должны быть
import Card from './card.js';

    // добавим пэджинэйшн
import Pagination from './pagination.js';

const product = {
    "id": "76w0hz7015kkr9kjkav",
    "images": [
      "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
      "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
    ],
    "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
    "rating": 2.89,
    "price": 15999,
    "category": "laptops",
    "brand": "acer"
};

  // const monitor={
  //   "id": "je1r13p0xckr9kjkav",
  // "images": [
  //   "https://content1.rozetka.com.ua/goods/images/big_tile/57322367.jpg",
  //   "https://i1.rozetka.ua/promotions/constructors/2074/2074368.png"
  // ],
  // "title": "Монитор 23\" Asus VC239HE-W (90LM01E2-B03470)",
  // "rating": 1.14,
  // "price": 3800,
  // "category": "laptops",
  // "brand": "asus"
  // };




// сроздадим глобальную страницу OnlineStorePage на котор будут другие компоненты
// export default означает экспорт по умолчанию
export default class OnlineStorePage {
  constructor () {

    // создадим пустой обьект components. Сюда будем скаладывать компоненты
    this.components = {};

    // вызываем три метода
    this.initComponents();
    this.render();
    this.renderComponents();
  }

  // getTemplate вставит карточки и Pagination в блоки
  getTemplate () {
    return `
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

  // инициализируем наши компоненты
initComponents () {
  // добавили сюда создание Card и Pagination
  const card = new Card(product);
  const pagination = new Pagination({
    // totalElements: 35,
    activePageIndex: 2,
    // pageSize: 8,
  });

  this.components.card = card;
  this.components.pagination = pagination;
}

  //  отрэндерим наши компоненты путем их поиска
  renderComponents () {
    const cardConteiner = this.element.querySelector('[data-element="card"]');
    const paginationConteiner = this.element.querySelector('[data-element="pagination"]');

    // componentElement свойство карточки с файла card.js
    cardConteiner.append(this.components.card.componentElement);
    paginationConteiner.append(this.components.pagination.element);
  }


  render() {
    const wrapper= document.createElement('div'); //создали элемент div

      //наполняем элемент div какимито данными
    wrapper.innerHTML=this.getTemplate();
      // firstElementChild находит первый элемент в родительском и вставляет в него
      // без firstElementChild создастся лишний div обертка
    this.element = wrapper.firstElementChild;
  }
}









