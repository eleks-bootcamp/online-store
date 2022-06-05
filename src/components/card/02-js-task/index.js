export default class Card {
  constructor () {
    this.render();
  }

  getTemplate () {
    return `
    <div class="wrapper">
    <div class="product-card">
      <div class="product-img"></div>
      <div class="product-content">
        <div class="product-price-block">
          <div class="product-rating">
            <span>1.23</span>
            <i class="bi bi-star"></i></div>
        <div class="product-price">15999</div>
          </div>
        <h5 class="product-title">Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black</h5>
        <p class="product-description">laptops</p>
      </div>
    <footer class="product-footer">
      <button class="btn-primary" data-element="addToCartBtn" ><!--<i class="bi bi-box-seam product-shoping-bag"></i>--> Add To Cart </button>
    </footer>
    </div>
  </div>
    `;
  }




  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.componentElement = wrapper;
  }
}


