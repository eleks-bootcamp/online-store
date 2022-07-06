'use strict';

export default class Card {
  constructor (product) {
    this.state = product;
    this.render();
    this.addEventListener();
  }

  getTeamplate () {
    const result = `
      <div class="col-12 col-l-6 col-xl-4">
        <div class="product">
          <div class="product__image-wrapper">
            <img src="${this.state.images[0]}" class="product__image" alt="Photo">
          </div >
          <div class="product__content">
            <div class="product__block-rating-and-price">
              <div class="product__rating">
                <div class="product__rating-count">${this.state.rating}</div>
                <i class="icon-star"></i>
              </div>
              <div class="product__price">${this.state.price}</div>
            </div>
            <div class="product__about">${this.state.title}</div>
            <div class="product__category">${this.state.category}</div>
          </div>
          <button class="product__button" data-element="cardBtn">ADD TO CART</button>
        </div>
      </div>
    `;

    return result;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }

  addEventListener () {
    const cardBtn = this.element.querySelector('[data-element="cardBtn"]');
    const customEvent = new CustomEvent('add-product', {
      detail: this.state
    });

    cardBtn.addEventListener('click', () => {
      document.dispatchEvent(customEvent);
    });
  }
}
