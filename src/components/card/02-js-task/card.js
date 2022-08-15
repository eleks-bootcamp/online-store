export default class Card {
  constructor (someProduct) {
    this.state = someProduct;
    this.myRender();
  }

  getTemplate() {
    const result = `
    <div class="card">
        <div class="card-1">
          <div class="card-content-image">
            <img src=${this.state.images[0]} alt="Laptop">
          </div>

          <div class="card-content-rating-price">
            <div class="card-content-rating">
              <p class="card-content-text-button">${this.state.rating}</p>
              <i class="bi bi-star"></i>
            </div>
            <p class="card-content-text">${this.state.price}</p>
          </div>

          <div class="card-content-name">
            <p class="card-content-text">${this.state.title}</p>
          </div>

          <div class="card-content-category">
            <p class="card-content-text"><small>${this.state.brand}</small></p>
          </div>
        </div>


        <div class="card-2">
          <div class="card-content-button">
            <div class="card-content-text-button">ADD TO CART</div>
          </div>
        </div>
      </div>
    `;
    return result
  }

  update(data = {}) {
    //I need to render new data
    this.state = data;
    this.element.innerHTML = this.getTemplate();
  }

  myRender(){
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
}
