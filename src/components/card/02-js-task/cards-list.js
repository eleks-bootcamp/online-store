import Card from "./card.js";

export default class CardsList {
  constructor (data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTemplate () {
return `
<div>
<div class="os-products-list" data-element="body">
</div>
</div>
`;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();
    this.element = element;
}

renderCards () {
  const cards = this.data.map(item => {
    const card = new Card (item);

    return card.element;
  });

  const body = this.element.querySelector('[data-element="body"]');

  body.innerHTML ='';
  body.append(...cards);
}

  update (data = []) {
    this.data = data;

    this.renderCards();
  }
}
