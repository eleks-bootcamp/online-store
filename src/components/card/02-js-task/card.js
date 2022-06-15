'use strict';

export default class Card {
  constructor (product) {
    this.state = product;
    this.render();
  }

  getTeamplate () {
    const result = `
      <div class="col-12 col-m-6 col-l-4">
        <div class="product">
          <img src="${this.state.images[0]}" class="product__image" alt="Photo">
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
          <button class="product__button">ADD TO CART</button>
        </div>
      </div>
    `;

    return result;
  }

  update (data = {}) {
    this.state = data;
    this.element.innerHTML = this.getTeamplate();
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }
}
