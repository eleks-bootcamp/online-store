export default class Card {
    constructor (someProduct) {
      this.state = someProduct;
      this.myRender();
    }

    getTemplate (){
      return `
        <div class="card_container">
            <div class="card_item-photo" style="background-image: url(${this.state.images})">
            </div>
            <div class="card_descriptin">
                <div class="card-item_pr-rt">
                    <div class="card_rate">
                    <span>${this.state.rating}</span>
                    <i class="bi bi-star"></i>
                    </div>
                    <div class="card_price">${this.state.price}</div>
                </div>
                <h5 class="card_title">${this.state.title}</h5>
                <p class="card_category">${this.state.category}</p>
            </div>
            <div class="card_footer">
                <button>
                ADD TO CART
                </button>
            </div>
        </div>
        `;

        return result;
      }

      update(data = {}) {
        this.state = data;
        this.componentElement.innerHTML = this.getTemplate();
      }

      myRender () {
        const element = document.createElement('div');
        element.innerHTML = this.getTemplate();
        this.componentElement = element;
      }
    }
