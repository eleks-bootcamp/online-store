"use strict";
export default class Card {
  constructor(product) {
    this.state = product;

    this.render();
    this.addEventListener();
  }

  getTemplate() {
    return `
      <div class="col-12 col-l-6 col-xl-4">
        <div class="product-card">
          <div class="product-card__img-wrapper">
            <img src="${this.state.images[0]}" alt="" class="product-card__img">
          </div>
          <div class="product-card__content">
            <div class="product-card__wrapper">
              <div class="product-card__rating">
                <div class="product-card__rating-count">${this.state.rating}</div>
                <i class="icon-star"></i>
              </div>
              <div class="product-card__price">${this.state.price}</div>
            </div>
            <div class="product-card__title">${this.state.title}</div>
            <div class="product-card__category">${this.state.category}</div>
          </div>
          <button class="button" data-element="cardBtn">Add To Cart</button>
        </div>
      </div>
    `;
  }

 render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  addEventListener() {
    const cardBtn = this.element.querySelector('[data-element="cardBtn"]');
    const customEvent = new CustomEvent('add-product', {
      detail: this.state
    });

    cardBtn.addEventListener('click', () => {
      document.dispatchEvent(customEvent);
    });
  }
}
