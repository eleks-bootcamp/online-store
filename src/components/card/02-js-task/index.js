export default class Card {

  constructor(someCard) {
    this.state = someCard;
    this.myRender();
  }

  getTemplate() {
    return `<div class="wrap">
<div class="os-img">
        <img src=${this.state.images[0]} alt="foto">
      </div>

        <div class="os-price">
      <div class="os-price-star">
        <p class="size">${this.state.rating}</p>
        <img src="../01-css-task/images/Star.png" alt="icon">

      </div>

      <p class="os-price-price size">
        ${this.state.price}
      </p>
    </div>

        <div class="os-text">
      <p class="size">${this.state.title}</p>
      <p class="os-text-two size">${this.state.category}</p>
    </div>

        <div><button class="os-footer size">add to cart</button></div>
</div>`
  }

  myRender() {
    const block = document.createElement('div');
    block.classList = "block";
    block.innerHTML = this.getTemplate();
    this.state = block;
  }

}


