"use strict";

const product = {
  "id": "76w0hz7015kkr9kjkav",
  "images": [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
  ],
  "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  "rating": 2.89,
  "price": 15999,
  "category": "laptops",
  "brand": "acer"
};

class Card {
  constructor (product) {
    this.product = product;
    this.render();
  }

  getTemplate () {
    return `
      <div class="product-card">
        <img src="${this.product.images[0]}" alt="" class="product-card__img">
        <div class="product-card__content">
          <div class="product-card__wrapper">
            <div class="product-card__rating">
              <div class="product-card__rating-count">${this.product.rating}</div>
              <i class="icon-star"></i>
            </div>
            <div class="product-card__price">${this.product.price}</div>
          </div>
          <div class="product-card__title">${this.product.title}</div>
          <div class="product-card__category">${this.product.category}</div>
        </div>
        <button class="button">Add To Cart</button>
      </div>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.cardElement = element;
  }
}

const card = new Card (product);

const rootElement = document.querySelector('#root');

rootElement.append(card.cardElement);
