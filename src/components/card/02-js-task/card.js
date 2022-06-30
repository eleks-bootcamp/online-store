
export default class Card {
  constructor(someProduct = {}) {
    this.state = someProduct;
    this.myRender();
  }
  getTemplate () {
    const result = `
  <div class="wrapper">
  <div class="product-card">
    <img class="card-img" src="${this.state.images[0]}"alt="Laptop-photo">

    <div class="card-rating">

      <div class="card-rating-number">${this.state.rating}<img src="../01-css-task/Star 1 (Stroke).svg"/></div>
      <div class="card-price">${this.state.price}</div>
    </div>
      <div class="card-category">
        <div class="card-text">${this.state.title}</div>
         <div class="laptop">
          <span>${this.state.category}</span>
         </div>
      </div>
    <div class="card-button">
      <button>ADD TO CART</button>
    </div>
    </div>
  </div>
    `;
    return result
  }
  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  }
  myRender () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;

  }
}


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Card component</title>
//   <link rel="stylesheet" href="../01-css-task/style.css">
//   <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
//   <link rel="stylesheet" href="../../pagination/01-css-task/style.css">
//   <style>
//     .wrapper {
//       width: 400px;
//       margin: 100px auto;
//     }
//   </style>
// </head>

// <body>
//   <div id="root" class="wrapper"></div>

//   <script type="module">
//     import Card from './index.js';
//     import Pagination from './pagination.js';

//      const product = {
//        "id": "76w0hz7015kkr9kjkav",
//        "images": [
//          "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
//          "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
//        ],
//        "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
//        "rating": 2.89,
//        "price": 15999,
//        "category": "laptops",
//        "brand": "acer"
//       };
//       const card = new Card(product);
//       const pagination = new Pagination({
//         activePageIndex: 3
//       });
//       const someElement = document.querySelector('#root');
//       root.append(card.componentElement);
//       someElement.append(pagination.element);

//   </script>
// </body>
// </html>
