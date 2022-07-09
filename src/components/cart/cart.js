'use strict';

import CartsCard from "../carts-card/carts-cart.js";

export default class Cart {
  constructor (data = []) {
    this.data = data;

    this.render();
    this.addEventListener();
  }

  getTeamplate () {
    return `
      <div class="overlay hidden" data-element="cart">
        <div class="cart">
          <i class="cart__close icon-close" data-element="close"></i>
          <ul class="cart__list" data-element="cartList"></ul>
          <div class="cart__total" data-element="total">Total: 0</div>
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
    const cards = Object.values(this.data).map(item => {
      const card = new CartsCard(item.product, item.quantity);

      return card.element;
    });

    const sum = Object.values(this.data)
                      .map(item => item.quantity * item.product.price)
                      .reduce((prev, curr,) => prev + curr, 0);

    const total = this.element.querySelector('[data-element="total"]');
    total.textContent = sum;

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
