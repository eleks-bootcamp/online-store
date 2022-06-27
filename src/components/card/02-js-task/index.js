// index.js это вся страница, и в ней необх укозать все компоненты которые на ней должны быть

import CardsList from './cards-list.js';

import Pagination from './pagination.js';



// products?_page=1&_limit=8
// задаем путь к BACKEND хранилищю с данными
// products это api категория, их много
const BACKEND_URL = 'https://online-store.bootcamp.place/api/'




// сроздадим глобальную страницу OnlineStorePage на котор будут другие компоненты
// export default означает экспорт по умолчанию
export default class OnlineStorePage {
  constructor () {

    // огласим сколько хотим видеть карточек на страничке
    this.pageSize = 9;

    // продукты в OnlineStorePage будем подтягивать самостоятельно
    this.products = [];


    // создадим ссылку для подтягивания данных для карточек
    // Т.Е. добаляем к строчке BACKEND_URL параметр products
    // при создании проекта заменить this.url на this.productsUrl потому что будут другие категории еще
    this.url = new URL ('products', BACKEND_URL);

    // зададим неизменную величину колличества элементов на одну страницу pageSize
    this.url.searchParams.set('_limit', this.pageSize);


    console.log("this.products=", this.products);

    // создадим пустой обьект components. Сюда будем скаладывать компоненты
    this.components = {};

    // вызываем три метода
    this.initComponents();
    this.render();
    this.renderComponents();

      // реализует функцию переключения списка карточек (меняет выводимые карточки на экране)
    this.initEventListeners();

    // подгрузим первую страничку при первой загрузке сайта
    this.update(1);
  }



  // создадим метод который будет загружать данные
  async loadData (pageNumber) {

    // добовляем к url номер страницы которая нас интерисует
    this.url.searchParams.set('_page', pageNumber);

    const response = await fetch(this.url);
    const products = await response.json();
    console.log("products=", products);
    return products;
  }







  // getTemplate вставит карточки и Pagination в блоки
  getTemplate () {
    return `
      <div>
        <div data-element="cardsList">
        <!-- Cards List component -->
        </div>
        <div data-element="pagination">
        <!-- Pagination -->
        </div>
      </div>
    `;
  }

  // инициализируем наши компоненты
initComponents () {

  // зададим по умолчанию колличество элементов в списке constTotalElements
  const totalElements = 100;

  // Math.ceil округление до большего целого
  // const totalPages = Math.ceil(this.products.length / this.pageSize);
  const totalPages = Math.ceil(totalElements / this.pageSize);

  console.log("this.products.length=", this.products.length);

  // добавили сюда создание Card и Pagination
  const cardList = new CardsList(this.products);
  const pagination = new Pagination({
    activePageIndex: 0,
    totalPages: totalPages
  });

     //  добавим в this.components указанные компоненты
  this.components.cardList = cardList;
  this.components.pagination = pagination;
}

  //  отрэндерим наши компоненты путем их поиска
  renderComponents () {
    const cardsConteiner = this.element.querySelector('[data-element="cardsList"]');
    const paginationConteiner = this.element.querySelector('[data-element="pagination"]');

    // componentElement свойство карточки с файла card.js
    cardsConteiner.append(this.components.cardList.element);
    paginationConteiner.append(this.components.pagination.element);
  }


  render() {
    const wrapper= document.createElement('div'); //создали элемент div

      //наполняем элемент div какимито данными
    wrapper.innerHTML=this.getTemplate();
      // firstElementChild находит первый элемент в родительском и вставляет в него
      // без firstElementChild создастся лишний div обертка. Убирает 'div' из строчки выше const wrapper
    this.element = wrapper.firstElementChild;
  }

  // initEventListeners вызывает метод update чтобы передать cartList компоненту новый диапазон данных
  initEventListeners() {
    // создаем действеи
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      this.update(pageIndex + 1);
    });
  }


  // метод update рисует данные
  async update (pageNamber) {
    // реализем отрезание массива даннных для вывода нужных карточек на экран
    // const start = pageIndex * this.pageSize;
    // const end = start + this.pageSize;
    // console.log(start, end);
    // const data = this.products.slice(start, end);

    const data = await this.loadData(pageNamber);

    // обнавляем cardList новыми данными
    this.components.cardList.update(data);
  }



}









