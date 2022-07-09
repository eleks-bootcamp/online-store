"use strict";

import CartsCard from "../carts-card/carts-card.js";


export default class Cart {
  constructor(data = []) {
    this.data = data;

    this.render();
    this.addEventListener();
  }

  getTemplate() {
    return `
      <div class="overlay hidden" data-element="cart">
        <div class="cart">
          <i class="cart__close icon-close" data-element="close"></i>
          <ul class="cart__list" data-element="cartList"></ul>
          <div class="cart__total">Total: <span>143991</span></div>
          <button class="button button_cart">Order</button>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  renderCartsCard() {
    const cards = Object.values(this.data).map(item => {
      const card = new CartsCard(item.product, item.quantity);

      return card.element;
    });

    const body = this.element.querySelector('[data-element="cartList"]');

    body.innerHTML = '';
    body.append(...cards);
  }

  addEventListener() {
    const close = this.element.querySelector('[data-element="close"]');
    const cart = this.element.querySelector('[data-element="cart"]');

    close.addEventListener('click', () => {
      cart.classList.add('hidden');
    });
  }
}
