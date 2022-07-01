export default class Card {
  constructor (someProduct) {
    this.state = someProduct;

    this.render();
  }

  getTemplate () {
    const result =  `
    <div class="card-wrapper">
      <div class="card-component-box col-12">
        <div class="card-content">
          <div class="card-product-image">
            <img src="${this.state.images[0]}" alt="Product image" class="product-image">
          </div>
          <div class="content-details">
            <div class="product-price-reating-wrapper">
              <div class="card-rating card-purple-elements">
                <span>${this.state.rating}</span>
                <i class="bi bi-star"></i>
              </div>
              <div class="card-product-price">${this.state.price}</div>
            </div>
            <div class="card-product-name">
              <p>${this.state.title}</p>
            </div>
            <div class="card-product-type">
              <p>${this.state.category}</p>
            </div>
          </div>
        </div>
        <div>
          <button class="card-add-button card-purple-elements card-cursor-pointer">Add to cart</button>
        </div>
      </div>
    </div>
        `;

  return result;

  }

  update (data = {}) {
    this.state = data;
    this.element.innerHTML = this.getTemplate();
  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
}


}
