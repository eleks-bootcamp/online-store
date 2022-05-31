export default class Card {
	  constructor (firstProduct) {
    this.nameProduct = firstProduct
    this.getTemPlate()
  }

  renderProduct () {
    return `
<div class="container_shop">
  <div class="container_shop_product">
    <div class="container_product">
      <div class="product">
        <div class="img">
          <a href="#">
            <img src="${this.nameProduct.images[0]}" alt="laptop">
          </a>
        </div>
        <div class="info">
          <div class="info_grade">
            <form action="#">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0.940965L8.8394 3.87345L8.95364 4.05557L9.16441 4.09795L12.6648 4.80181L10.3013 7.25805L10.1392 7.42652L10.1645 7.65893L10.5264 10.9777L7.18936 9.61224L7 9.53476L6.81064 9.61224L3.47361 10.9777L3.83549 7.65893L3.86083 7.42652L3.69872 7.25805L1.3352 4.80181L4.83559 4.09795L5.04636 4.05557L5.1606 3.87345L7 0.940965Z" stroke="white"/>
              </svg>               
              <input type="submit" value="${this.nameProduct.rating}">
            </form>
            <p>${this.nameProduct.price}</p>
          </div>
          <div class="info_name">
            <a href="#">${this.nameProduct.title}</a>
            <p>
              ${this.nameProduct.category}
            </p>
          </div>
        </div>
        <div class="buy" >
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</div>`
  }

  getTemPlate() {
    const newContainer = document.createElement('div')
    newContainer.innerHTML = this.renderProduct()
    this.group = newContainer
  }
}