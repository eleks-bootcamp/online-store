export default class Card {
  constructor(product) {
    console.log('card', product.title);
    this.componentProduct = product;
    this.myRender();

  }
  getTemplate() {
    return `
    <div class="os-product-card">
        <div
          class="os-product-img"
          style="
            background-image: url(https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg);
          "
        ></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span>2.89</span>
              <i class="bi bi-star">&nbsp;</i>
            </div>

            <div class="os-product-price">${product.price}</div>
          </div>

          <h5 class="os-product-title">
            Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black
          </h5>
          <p class="os-product-description">laptops</p>
        </div>

        <footer class="os-product-footer">
          <button class="os-btn-primary" data-element="addToCartBtn">
            Add To Cart
          </button>
        </footer>
      </div>
    `;
  }
  myRender() {
    const element = document.createElement('div');
    element.className = 'os-product-card';
    element.innerHTML = this.getTemplate();

  }
}
