export default class Cart {

    constructor () {

        this.render()
    }

    getTemplate () {
        const result = `
            <div class="cart-button">
                <a href="modal.html" class="cart-button-link">
                    <i class="bi bi-cart"></i>
                    <span class="cart-button-span">cart</span>
                </a>
            </div>       
        `;
        return result;
    };

    render () { 

        const cart = document.createElement('div');
        cart.innerHTML = this.getTemplate();
        this.element = cart.firstElementChild;
    };
}