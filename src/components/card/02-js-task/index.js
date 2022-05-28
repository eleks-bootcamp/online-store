export default class Card {
constructor(someProduct) {
  this.state=someProduct;
  this.myRender();

}
HTMLForm(){
const result=`
  <div class="card-shop-main">
    <div class="card-shop-img">
      <img src=${this.state.images[1]} alt="">
    </div>
    <div class="card-shop-price-and-mark">
      <div class="card-shop-mark">
        <p>${this.state.rating}</p>
        <i class="bi bi-star"></i>
      </div>
      <p class="card-shop-price">${this.state.price}</p>
    </div>
    <div class="card-shop-name">
      <a href="#">${this.state.title}</a>
      <p>${this.state.category}</p>
    </div>

  </div>
  <button class="card-shop-button">
    ADD TO CART
  </button>
    `
  return result;
}
update(data={}){
  this.state=data;
  this.componentElement.innerHTML=this.HTMLForm();

}
myRender() {
  let elements = document.createElement('div');
  elements.className = "card-shop";
  elements.innerHTML=this.HTMLForm();
  this.componentElement = elements;
}
}
