'use strict';

import CartsCard from "../../carts-card/carts-cart.js";

export default class Cart {
  constructor (data = []) {
    this.data = data;

    this.render();
    this.renderCartsCards();
    this.addEventListener();
  }

  getTeamplate () {
    return `
      <div class="overlay hidden" data-element="cart">
        <div class="cart">
          <i class="cart__close icon-close" data-element="close"></i>
          <ul class="cart__list" data-element="cartList"></ul>
          <div class="cart__total">Total: 92496</div>
          <button class="cart__button-order">ORDER</button>
        </div>
      </div>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }

  renderCartsCards () {
    const cards = this.data.map(item => {
      const card = new CartsCard(item);

      return card.element;
    });

    const body = this.element.querySelector('[data-element="cartList"]');

    body.innerHTML = '';
    body.append(...cards);
  }

  addEventListener () {
    const close = this.element.querySelector('[data-element="close"]');
    const cart = this.element.querySelector('[data-element="cart"]');

    close.addEventListener('click', () => {
      cart.classList.add('hidden');
    });
  }
}
