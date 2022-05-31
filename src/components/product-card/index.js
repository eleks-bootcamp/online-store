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

const monitor = {
  id: "w73oaydowenkr9kjkav",
  images: [
  "https://content1.rozetka.com.ua/goods/images/big_tile/178050370.jpg"
  ],
  title: "Монитор 23.8 BenQ GW2475H (9H.LFELA.TBE)",
  rating: 5,
  price: 3800,
  category: "monitors",
  brand: "benq"
};

class Card {
  constructor (product) {
    this.state = product;
    this.render();
  }

  getTemplate () {
    return `
      <div class="product-card">
        <img src="${this.state.images[0]}" alt="" class="product-card__img">
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
    `;
  }

  update (data = {}) {
    this.state = data;
    this.element.innerHTML = this.getTemplate();
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }
}

const card = new Card (product);

const rootElement = document.querySelector('#root');

rootElement.append(card.element);

card.update(monitor);
