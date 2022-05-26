export default class Card {
constructor(someProduct) {
  this.product=someProduct;
  this.HTMLForm();

}
HTMLForm(){
let elements= document.createElement('div');
  elements.className = "card-shop";
elements.innerHTML=`
  <div class="card-shop-main">
    <div class="card-shop-img">
      <img src=${this.product.images[1]} alt="">
    </div>
    <div class="card-shop-price-and-mark">
      <div class="card-shop-mark">
        <p>${this.product.rating}</p>
        <i class="bi bi-star"></i>
      </div>
      <p class="card-shop-price">${this.product.price}</p>
    </div>
    <div class="card-shop-name">
      <a href="#">${this.product.title}</a>
      <p>${this.product.category}</p>
    </div>

  </div>
  <button class="card-shop-button">
    ADD TO CART
  </button>
    `
  this.componentElement=elements;
}
}
