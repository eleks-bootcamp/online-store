
export default class Card {
    constructor(someProduct) {
            this.componentProduct = someProduct;
            this.render();
    }           
    getTemplate() { 
        const result = `
            <div>
                 <div class="prodact-card prodact-d-flex-jc-space-b font-montserrat-400">
                   <div class="prodact-image" style="background-image: url(${this.componentProduct.images[0]})">
                </div>
                <div class="prodact-content">
                  <div class="prodact-price-wrapper prodact-d-flex-jc-space-b">
                    <div class="prodact-rating prodact-button-color prodact-d-flex-jc-space-b font-size-13">
                      <span >${this.componentProduct.rating}</span>
                      <i class="bi bi-star"></i>
                       </div>
                    <div class="prodact-price font-size-15">${this.componentProduct.price}</div>
                  </div>
                     <h5 class="font-size-13 font-montserrat-400">${this.componentProduct.title}</h5>
                  <div class="prodact-name font-size-10">${this.componentProduct.category}</div>
                </div>
                <div class="prodact-add-to-card prodact-button-color">
                  <button class="prodact-button-add font-montserrat-400 prodact-button-color font-size-13">ADD TO CARD</button>
                </div>
              </div>
            </div>
            `;
        return result;
     }
  
    render () {
         const element = document.createElement('div');
         element.innerHTML = this.getTemplate();
         this.componentElement = element;
     }
          
    }
     