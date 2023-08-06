export default class Card {
  constructor (someProduct = {}) {
    this.state = someProduct;
    this.myRender();
  }

  getTemplate () {
    const result =  `
    <div class="product-card">
    <!-- Card component -->
      <div class="product-card-img-wrapper" style="background-image: url(${this.state.images[0]})";>
      </div>
    <div class="wrapper-content">
      <div class="offer">
        <div class="product-rating">
          <p class="product-rating-number">${this.state.rating}</p>
          <img class="product-rating-star" src="../01-css-task/img/Star1.svg" alt="star">
        </div>
        <p class="product-price">${this.state.price}</p>
      </div>
      <p class="product-description">${this.state.category}</p>
      <p class="product-categories">${this.state.title}</p>
    </div>
    <button class="btn" type="button">Add To Cart</button>
  </div>
  `;

    return result
  }

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  }

  myRender () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
}
