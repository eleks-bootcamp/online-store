export default class Card {
  element;

  constructor({
    id = "",
    images = [],
    title = "",
    rating = 0,
    price = 0,
    category = "",
    brand = "",
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  get template() {
    return `
  <div class="card">
    <div class="card__inner">
          <img class="card__img" src="${this.images[0]}" alt="product" />
          <div class="card__details">
            <div class="card__rate-and-price">
              <button class="card__product--rate">${this.rating}&nbsp;
                <i class="bi bi-star"></i>
              </button>
              <span class="card__price">${this.price}</span>
            </div>
            <h4 class="card__title">${this.title}</h4>
            <span class="card__info">${this.category}</span>
          </div>
        </div>
        <button class="card__btn">Add to cart</button>
    </div>
    `;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = this.template;

    this.element = card;
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
