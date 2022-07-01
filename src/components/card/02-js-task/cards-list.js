
import Card from './card.js';

export default class CardList {
  constructor (data = []) {
    this.data = data;

    this.render();
    this.renderCards();
  }

  getTemplate () {
    return `
      <div>
        <div class = "wrapper col-m-11 col-l-10" data-element = "body">
          <!-- Cards list -->
        </div>
      </div>
    `;

  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }

  renderCards () {
    const cards = this.data.map(item => {
      const card = new Card(item);

      return card.element;
    });

    const body = this.element.querySelector('[data-element = "body"]');

    body.innerHTML = '';
    body.append(...cards);
  }

  update (data = []) {
    this.data = data;

    this.renderCards();
  }

}
