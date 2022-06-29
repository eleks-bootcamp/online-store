import Card from "./index.js";

export default class CardList {
    constructor (data = []) {
        this.data = data;
        this.render();
    }


getMyTemplate() {
return `
        <div>
            <div class="os-products-list" data-element="body">
                <!-- Card list -->
            </div>
        </div>
    `;
};

 render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getMyTemplate();
    
    this.element = wrapper.firstElementChild ; 
}

renderCards () {
    const cards = this.data.map(item => {
        const card = new Card(item)

        return card.element;
        
    });
    console.log('cards' , cards)
}
}