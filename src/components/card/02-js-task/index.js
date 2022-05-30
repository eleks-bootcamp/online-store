export default class Card {
    constructor (someProduct) {
        this.componentProduct = someProduct;
        this.myRender();
    }

    getTemplate () {
    return `
        <div class="card">
          <div class="item", style="background-image: url(${this.componentProduct.images[0]})"></div>

          <div class="item-content">

            <div class="price">
              <button class="card_button_1 button_color"> 
                <span>${this.componentProduct.rating}</span> 
                <i class="bi bi-star"></i>
              </button>

              <p class="value">${this.componentProduct.price}</p>
            </div>

            <p class="name">
              ${this.componentProduct.title}
            </p>

            <p class="catagory">${this.componentProduct.category}</p>

            

          </div>

          <button class="main-button">add to card</button>
          
        </div>
        `
    }

    myRender () {
        const element = document.createElement('div');

        element.innerHTML = this.getTemplate()

        this.componentElement = element;
    }

}
