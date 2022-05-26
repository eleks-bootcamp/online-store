export default class Card {

  constructor(someCard) {
    this.element = someCard;
    this.myRender();
  }

  getTemplate() {
    return `<div class="os-img">
        <img src="../01-css-task/images/Rectangle.png" alt="foto">
      </div>

        <div class="os-price">
      <div class="os-price-star">
        <p class="size">1.23</p>
        <img src="../01-css-task/images/Star.png" alt="icon">

      </div>

      <p class="os-price-price size">
        15999
      </p>
    </div>

        <div class="os-text">
      <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
      <p class="os-text-two size">laptops</p>
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


