// в середине этого файла будет много карточек
export default class CardsList {
  constructor(data = []) {
    // организуем данные data для заполнения карточек
    this.data = data;

    this.render();

  }

  getTempLate () {
    return `
      <div class="os-products-list" data-element="body">
        <!-- Cards list -->
      </div>

    `;

  }

  render () {
    const wrapper= document.createElement('div'); //создали элемент div
      //наполняем элемент div какимито данными
    wrapper.innerHTML=this.getTemplate();
      // firstElementChild находит первый элемент в родительском и вставляет в него
      // без firstElementChild создастся лишний div обертка
    this.element = wrapper.firstElementChild;
  }

  // метод renderCards нарисует карточки
  // проитерирует массив с данными this.data
  renderCards () {

  }

}
