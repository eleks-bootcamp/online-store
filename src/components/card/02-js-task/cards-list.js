import Card from "./card.js";

export default class CardsList {

    constructor (data = []) {
        this.data = data;
        this.render();
        this.renderCards();
    }
    getTemplate () {
        return `
        <div>
            <div class="products-list" data-element="section">
                
            </div>
        </div>
        `;
    };

     render () {
        const wrapper = document.createElement('div');
    
        wrapper.innerHTML = this.getTemplate();
        
        this.element = wrapper.firstElementChild;
     };
     renderCards () {

         const cards = this.data.map(item => {
             const card = new Card(item);

             return card.element;
         });

          const section = this.element.querySelector('[data-element="section"]');
          section.innerHTML = '';
          section.append(...cards);
    
     };
     update (data = []) {
        this.data = data;

        this.renderCards();
     };
    

}