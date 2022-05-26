export default class Card {

  constructor(someCard) {
    this.element = someCard;
    this.myRender();
  }

  getTemplate() {
    return `<div class="os-img">

        <img src=${this.element.images[0]} alt="foto">
      </div>

        <div class="os-price">
      <div class="os-price-star">
        <p class="size">${this.element.rating}</p>
        <img src="../01-css-task/images/Star.png" alt="icon">

      </div>

      <p class="os-price-price size">
        ${this.element.price}
      </p>
    </div>

        <div class="os-text">
      <p class="size">${this.element.title}</p>
      <p class="os-text-two size">${this.element.category}</p>
    </div>

        <div><button class="os-footer size">add to cart</button></div>`
  }

  myRender() {
    const block = document.createElement('div');
    block.classList = "block";
    block.innerHTML = this.getTemplate();
    this.element = block;
  }

}


