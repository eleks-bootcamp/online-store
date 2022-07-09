'use strict';

export default class CartsCard {
  constructor (product, quantity) {
    this.state = product;
    this.quantity = quantity;

    this.render();
    this.addEventListener();
  }

  getTeamplate () {
    return `
      <li class="cart__list-item">
        <img src="${this.state.images[1]}" class="cart__image" alt="Product-img">
        <div class="cart__item-description">${this.state.title}</div>
        <div class="cart__item-count">
          <button class="cart__button-count" data-element="minus">
            <i class="icon-minus"></i>
          </button>
          <span class="cart__count">${this.quantity}</span>
          <button class="cart__button-count" data-element="plus">
            <i class="icon-plus"></i>
          </button>
        </div>
        <div class="cart__item-price">${this.state.price * this.quantity}</div>
      </li>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }

  addEventListener () {
    const minus = this.element.querySelector('[data-element="minus"]');
    const plus = this.element.querySelector('[data-element="plus"]');

    minus.addEventListener('click', () => {
      this.dispatchMinusEvent(this.state.id);
    });

    plus.addEventListener('click', () => {
      this.dispatchPlusEvent(this.state.id);
    });
  }

  dispatchMinusEvent (id) {
    const customEvent = new CustomEvent('minus-selection', {
      detail: id
    })

    document.dispatchEvent(customEvent);
  }

  dispatchPlusEvent (id) {
    const customEvent = new CustomEvent('plus-selection', {
      detail: id
    })

    document.dispatchEvent(customEvent);
  }
}
