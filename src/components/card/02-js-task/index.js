export default class Card {
    constructor (someProduct) {
        // this -> {}
          this.state = someProduct;
          this.myRender();

      }

      getMyTemplate () {
        return `
          </div>
          <div class="product-card">
            <div class="img-wrapper" style=" background-image: url(${this.state.images[0]})";>
              
            </div>
            <div class="wrapper-content">
              <div class="offer">
                <div class="product-rating">
                  <p class="product-rating-number">${this.state.rating}</p>
                  <img class="product-rating-star" src="../../../../components/card/img/Star1.svg" alt="star">
                </div>
                <p class="product-price">15999</p>
              </div>
              <p class="product-description">${this.state.title}</p>
              <p class="product-categories">${this.state.category}</p>
            </div>
            <button class="btn" type="button">Add To Cart</button>
          </div> 
          `;
      }


    //   update(data = {})  {
    //     //i need to render new data
    //     this.state = data;
    //     this.componentElemet.innerHTML = this.getMyTemplate();

    //     console.log('this.componentElemet', this.componentElemet);
    //   } 

      myRender () {
          const element = document.createElement('div');

          element.innerHTML = this.getMyTemplate();
          
          this.componentElemet = element 
      }
  }

  




