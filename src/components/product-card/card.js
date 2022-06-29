"use strict";
export default class Card {
  constructor(product) {
    this.state = product;
    this.render();
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
          <button class="button">Add To Cart</button>
        </div>
      </div>
    `;
  }

  // Is it necessary?
  update(data = {}) {
    this.state = data;
    this.element.innerHTML = this.getTemplate();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }
}
