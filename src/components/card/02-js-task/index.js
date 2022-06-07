const laptop = {
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
"id": "r5pyc7y91djkr9kjkav",
"images": [
  "https://content.rozetka.com.ua/goods/images/big_tile/73891904.jpg"
],
"title": "Монитор 27\" Dell S2721DGFA (210-AXRQ)",
"rating": 2.13,
"price": 6900,
"category": "monitors",
"brand": "dell"
};

export default class Card {
  constructor (someProduct) {
    this.state = someProduct;
    this.myRender();
  }

  getTaemplate () {
    const result = `
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
    `;

    return result;
  }

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTaemplate();
  }

  myRender () {
    const element = document.createElement('div');

    element.innerHTML = this.getTaemplate();

    this.componentElement = element;
  }
}

const card = new Card(laptop);

const rootElement = document.querySelector('#root');
rootElement.append(card.componentElement);

card.update(monitor);
