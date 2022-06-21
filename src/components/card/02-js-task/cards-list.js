// в середине этого файла будет много карточек

import Card from './card.js';
export default class CardsList {
  constructor(data = []) {
    // организуем данные data для заполнения карточек. В Data массиве содержатся данные для заполнения карточек
    this.data = data;

    this.render();
    this.renderCards();

  }

  getTempLate () {
    // обернем Cards list в еще один <div>, который будет позиционировать список карточек на странице
    // внутренний <div class="os-products-list>  формирует список наших карточек
    return `
      <div>
        <div class="os-products-list" data-element="body">
          <!-- Cards list; класс class="os-products-list" организовывает таблицу для размешения карточек в CardsList, у меня он еще не создан -->
        </div>
      </div>
    `;
  }

  render () {
    const wrapper= document.createElement('div'); //создали элемент div
      //наполняем элемент div какимито данными
    wrapper.innerHTML=this.getTempLate();
      // firstElementChild находит первый элемент в родительском и вставляет в него
      // без firstElementChild создастся лишний div обертка
    this.element = wrapper.firstElementChild;
  }

  // метод renderCards нарисует карточки
  // проитерирует массив с данными this.data
  renderCards () {
    // на каждый item создаем карточку DOM єлемент
    const cards = this.data.map(item => {
      const card = new Card(item);
      return card.element;
    });

      // ищем элемент куда будем вставлять карточки
    const body = this.element.querySelector(`[data-element="body"]`);

    // удалим содержимое body пустой строчкой
    body.innerHTML = '';

    body.append(...cards);
    console.log("cards=", cards);
  }
  update (data = [] ) {
    // обновим data
    this.data = data;

    this.renderCards();

  }

}
