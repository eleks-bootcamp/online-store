export default class Cart {
  element;

  constructor() {
    this.list = null
    this.total = 0;

    this.render();
  }

  get template() {
    return `
      ${this.list.outerHTML}
      <p class="cart-total">Total: ${this.total}</p>
      <button id="addBtn" class="cart-btn">Order</button>
    `
  }

  render() {
    const cart = document.createElement("div");
    const cartList = document.createElement("div");

    cart.classList.add("cart");
    cartList.classList.add("cart-list");

    this.list = cartList;
    cart.innerHTML = this.template;

    this.element = cart;
  }

  add(product) {
    this.total += product.price
    this.list.append(new CartItem(product).element);
    this.element.innerHTML = this.template;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}

class CartItem {
  element;

  constructor({
    id = "",
    images = [],
    title = "",
    price = 0,
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.price = price;

    this.render();
  }

  get template(){
    return `
      <img class="cart-item__img" src="${this.images[0]}" alt="item img">
      <h4 class="cart-item__title">${this.title}</h4>
      <div class="cart-item__quantity">
        <button class="cart-item__btn">
          <img src="./icons/decrement.svg" alt="decrement icon" class="cart-item__button">
        </button>
        <span class="cart-item__total">1</span>
        <button class="cart-item__btn">
          <img src="./icons/increment.svg" alt="increment icon" class="cart-item__button">
        </button>
      </div>
      <span class="cart-item__summ">${this.price}</span>
    `
  }

  render() {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = this.template;

    this.element = cartItem;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
