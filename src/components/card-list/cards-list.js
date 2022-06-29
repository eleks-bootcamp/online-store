/* import { products } from "../../../products.js"; */
import Card from "../card/card.js";

export default class CardsList {
  constructor (data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTeamplate () {
    return `
      <div class="container">
        <div class="row" data-element="body">

        </div>
      </div>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }

  renderCards () {
    const cards = this.data.map(item => {
      const card = new Card(item);

      return card.element;
    });

    const body = this.element.querySelector('[data-element="body"]');

    body.innerHTML = '';

    body.append(...cards);
  }

  update (data = []) {
    this.data = data;

    this.renderCards();
  }
}
