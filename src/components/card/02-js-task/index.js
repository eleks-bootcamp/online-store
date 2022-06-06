export default class Card {
  constructor(someProduct) {
    this.state = someProduct;
    this.myRender();
  }
  getTemplete() {
    return `
    <div class="wrapper">
  <!-- Card component -->
  <div class="product-img" style="background-image: url(${this.state.images[0]});">

  </div>
  <div class="product-content">
    <div class="product-price">
      <div class="product-rating">
        <span>${this.state.rating}</span>
        <i class="fa fa-star-o" aria-hidden="true"></i>
      </div>
      <div class="price">${this.state.price}</div>
    </div>
    <h5 class="product-title">
      ${this.state.title}
    </h5>
    <p class="product-description">${this.state.category}</p>
  </div>
  <button class="btn-add">ADD TO CART</button>
</div>
    `;
  }

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplete();
  }

  myRender() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplete();
    this.componentElement = element;
  }
}
