'use strict';

export default class CartsCard {
  constructor (product) {
    this.state = product;

    this.render();
  }

  getTeamplate () {
    return `
      <li class="cart__list-item">
        <img src="${this.state.images[1]}" class="cart__image" alt="Product-img">
        <div class="cart__item-description">${this.state.title}</div>
        <div class="cart__item-count">
          <button class="cart__button-count">
            <i class="icon-minus"></i>
          </button>
          <span class="cart__count">3</span>
          <button class="cart__button-count">
            <i class="icon-plus"></i>
          </button>
        </div>
        <div class="cart__item-price">${this.state.price}</div>
      </li>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }
}
