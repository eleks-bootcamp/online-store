export default class Card {
  constructor (someProduct = {}) {
    this.state = someProduct;
    this.render();}

  getTeamplate () {
    return   `
    <div class="col-12 col-xl-4f12 col-l-4f12 col-m-6f12 col-s-12f12">
<div class="os-product-card">
  <div class="os-product-img">
      <img class="img scale-down" src="${this.state.images[0]}" alt="">
  </div>
  <div class="os-product-discription">
    <div class="os-rating-price-bar">
      <div class="os-rating">
        <span>${this.state.rating}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
      </div>
      <div class="os-price">${this.state.price}
      </div>
    </div>
      <div class="os-product-name">
        ${this.state.title}
      </div>
      <div class="os-product-category">
        ${this.state.category}
      </div>
  </div>
  <div class="os-add-button">
    <p>Add to cart</p>
  </div>
</div>
</div>
      `;


  }

  update (data={}) {
  this.state = data;
  this.ComponentElement.innerHTML=this.getTeamplate();
};
  render () {
      const wrapper = document.createElement ('div');
      wrapper.innerHTML = this.getTeamplate ();

      this.element = wrapper.firstElementChild;
    }
}



