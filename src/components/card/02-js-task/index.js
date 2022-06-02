export default class Card {
    constructor(someProduct) {
      this.state = someProduct;
      this.myRender();
    }
    getTemplate() {
      return `
      <div class="card">
        <img class="product_photo" src="${this.state.images[0]}" alt="Фото товару">
         <div class="product_content">
          <span class="bloc_favorite">
           <span class="counter">${this.state.rating}</span>
          <span class="btn_favorite"><i class="bi bi-star"></i></span>
         </span>
        <span class="price">${this.state.price}</span>
        <div class="description">
          <h5>${this.state.title}</h5>
        </div>
        <div class="category">
          <p>${this.state.category}</p>
        </div>
      </div>
      <button class="btn_addToCart">ADD TO CART</button>
    </div>
      `
    }
    update(data = {}) {
      this.state = data;
      this.componentElement.innerHTML = this.getTemplate();
    }
    myRender() {
      const element = document.createElement('div');
      element.innerHTML = this.getTemplate();
      this.componentElement = element;
    }
























}
