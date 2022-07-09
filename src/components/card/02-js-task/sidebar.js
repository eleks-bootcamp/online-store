// import DoubleSlider from './doubleslider.js';
// import  Brand  from './brand.js';
// import Category from './category.js';


export default class Sidebar {
    constructor () {
        
        this.initComponents ();
        this.render();
        this.renderComponents ();
        

    }
    getTemplate () {
        const result = `
            <div data-element="sideBar">
                <div class="sidebar">
                    <div class="sidebar-content">

                        <div class="form-group price-slider">
                             <h3 class="slider-tittle">Price</h3> 
                             <div data-element ="doubleSlider"></div>
                        </div>
                       
                       <form class="form-filters-category form-group font-montserrat" action="#">
                            <h3 class="form-tittle">Category</h3>
                            <div>
                                <div data-element ="category"></div>
                            </div>
                        </form>
                                             
                        <span class="delimiter"></span>

                        <form class="form-filters-category form-group font-montserrat" action="#">
                            <h3 class="form-tittle">Brand</h3>
                            <div>
                                <div data-element ="brand"></div>
                            </div>
                        </form>

                        <span class="delimiter"></span>

                        <div class="form-group price-slider">
                             <h3 class="slider-tittle">Rating</h3> 
                             <div data-element ="doubleSlider"></div>
                        </div>
                       
                      
                        
                    </div>
                    <div class="prodact-button-clear prodact-button-color">
                        <button class="prodact-button-add font-montserrat-400 prodact-button-color font-size-13">CLEAR ALL FILTERS</button>
                    </div>  
                </div>
            </div>
        `;
        return result;
    };

   
    initComponents () {
   
       
        // const doubleSlider = new DoubleSlider();
        // const brand = new Brand();
        // const category = new Category();
    
       
        // this.components.doubleSlider = raiting;
        // this.components.doubleSlider = price;
        // this.components.brand = brand;
        // this.components.category = category;

      };
      renderComponents () {
    
        
        // const priceContainer = this.element.querySelector('[data-element = "price"]');
        // const ratingContainer = this.element.querySelector('[data-element = "rating"]');
        // const categoryContainer = this.element.querySelector('[data-element = "category"]');
        // const brandContainer = this.element.querySelector('[data-element = "brand"]');
        

    
        // priceContainer.append(this.components.price.element);
        // ratingContainer.append(this.components.raiting.element);
        // categoryContainer.append(this.components.category.element);
        // brandContainer.append(this.components.brand.element);
       
      };
        
      render () { 
        const sideBar = document.createElement('div');
        sideBar.innerHTML = this.getTemplate();
        this.element = sideBar.firstElementChild;
    };
}