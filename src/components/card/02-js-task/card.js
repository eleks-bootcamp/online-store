export default class Card {
  constructor (product) {
    this.state = product;
    this.myRender();
  }

  getTemplate () {
  const result = `
    <div class="card col-m col-s">
      <div class="item", style="background-image: url(${this.state.images[0]})"></div>

      <div class="item-content">

        <div class="price">
          <button class="card_button_1 button_color"> 
            <span>${this.state.rating}</span> 
            <i class="bi bi-star"></i>
          </button>

          <p class="value">${this.state.price}</p>
        </div>

        <p class="name">
          ${this.state.title}
        </p>

        <p class="catagory">${this.state.category}</p>

      </div>

      <button class="main-button">add to card</button>
      
    </div>
    `;

    return result
  }

  update (data = {}) {
    this.state = data;

    this.element.innerHTML = this.getTemplate();
  }

  myRender () {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

}
