export default class Card {
  constructor (someProduct) {
    this.state = someProduct;
    this.myRender();
  }

  getTemplate () {
    const result =  `
      <div class="os-product-card">
        <div class="os-product-img" style="background-image: url(${this.state.images[0]});"></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span>${this.state.rating}</span>
              <i class="bi bi-star"></i>
            </div>

            <div class="os-product-price">${this.state.price}</div>
          </div>

          <h5 class="os-product-title">${this.state.title}</h5>
          <p class="os-product-description">${this.state.category}</p>
        </div>

        <footer class="os-product-footer">
          <button class="os-btn-primary" data-element="addToCartBtn">
            Add To Cart
          </button>
        </footer>
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

    this.componentElement = wrapper.firstElementChild;
  }
}
