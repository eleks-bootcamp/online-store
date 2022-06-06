export default class Card {
  constructor(someTitle) {
    this.state = someTitle;
    this.myRender();
  };

  getTemplate () {
    return `
      <div class="product-card d-flex">

        <img class="product-card-laptop" src="${this.state.images[0]}" alt="laptop">

        <div class="product-card-wrapper d-flex">
          <div class="product-card-rating d-flex">
            <div class="product-card-rating-star d-flex">
              <p>${this.state.rating}</p>
              <img src="../images-icons/star-rating.svg" alt="star for rating">
            </div>
            <div class="product-card-price">${this.state.price}</div>
          </div>
          <div class="product-card-title">
            <p>${this.state.title}</p>
            <span>${this.state.category}</span>
          </div>
        </div>

        <div class="product-card-footer d-flex">ADD TO CART</div>

      </div>
    `;
  };

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  };

  myRender() {
    const element = document.createElement('div');
    element.innerHTML = this.getTemplate();
    this.componentElement = element;
  };
}
