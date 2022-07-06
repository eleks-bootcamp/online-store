export default class Title {

  constructor(){
  this.render();
  }

  getTemplate(){
    return `<div class="TitleAndCard-wrapper">
    <div class="OS-title"><h1>Online Store</h1></div>
    <div class="Card-Backet"><button><i class="bi bi-cart"></i>CART</button></div>
  </div>`;
  }
  render(){
    const title = document.createElement('div');

    title.innerHTML = this.getTemplate();
    this.element = title;

  }
}
