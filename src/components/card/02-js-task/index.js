// index.js это вся страница, и в ней необх укозать все компоненты которые на ней должны быть
// import Card from './card.js';

import CardsList from './cards-list.js';

    // добавим пэджинэйшн
import Pagination from './pagination.js';


// сроздадим глобальную страницу OnlineStorePage на котор будут другие компоненты
// export default означает экспорт по умолчанию
export default class OnlineStorePage {
  constructor (products = []) {

    // огласим сколько хотим видеть карточек на страничке
    this.pageSize = 3;

    this.products = products;

    // создадим пустой обьект components. Сюда будем скаладывать компоненты
    this.components = {};

    // вызываем три метода
    this.initComponents();
    this.render();
    this.renderComponents();

      // реализует функцию переключения списка карточек (меняет выводимые карточки на экране)
    this.initEventListeners();
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

  // Math.ceil округление до большего целого
  const totalPages = Math.ceil(this.products.length / this.pageSize);
  // добавили сюда создание Card и Pagination
  const cardList = new CardsList(this.products.slice(0, this.pageSize));
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

  initEventListeners() {
    // создаем действеи
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      // реализем отрезание массива даннных для вывода нужных карточек на экран
      // console.log('this.products=', this.products.slice());
      const start = pageIndex * this.pageSize;
      const end = start + this.pageSize;
      console.log(start, end);

      const data = this.products.slice(start, end);

      this.components.cardList.update(data);

    });
  }
}









