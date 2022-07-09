"use strict";

export default class CartsCard {
  constructor(product, quantity) {
    this.state = product;
    this.quantity = quantity;

    this.render();
    this.addEventListeners();
  }

  getTemplate() {
    return `
      <li class="cart__list-item">
        <img src="${this.state.images[0]}" alt="notebook" class="cart__item-img">
        <div class="cart__item-descr">${this.state.title}</div>
        <div class="cart__item-count">
          <button class="cart__btn" data-element="btnMinus"><i class="icon-minus"></i></button>
          <span>${this.quantity}</span>
          <button class="cart__btn" data-element="btnPlus"><i class="icon-plus"></i></button>
        </div>
        <div class="cart__item-price">${this.state.price * this.quantity}</div>
      </li>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  addEventListeners() {
    const btnMinus = this.element.querySelector('[data-element="btnMinus"]');
    const btnPlus = this.element.querySelector('[data-element="btnPlus"]');

    btnMinus.addEventListener('click', () => {
      this.dispatchMinusEvent(this.state.id);
    });

    btnPlus.addEventListener('click', () => {
      this.dispatchPlusEvent(this.state.id);
    });
  }

  dispatchMinusEvent(id) {
    const customEvent = new CustomEvent('minus-selection', {
      detail: id
    });

    document.dispatchEvent(customEvent);
  }

  dispatchPlusEvent(id) {
    const customEvent = new CustomEvent('plus-selection', {
      detail: id
    });

    document.dispatchEvent(customEvent);
  }
}
