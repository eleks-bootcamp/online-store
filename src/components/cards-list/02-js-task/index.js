// export default class CardsList {
//
//   constructor({data = [], Component = {}}) {
//     this.data = data;
//     this.Component = Component;
//
//     console.log('data',data);
//
//     this.render();
//   }
//
//   getT(obj) {
//
//     // return `
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src="../01-css-task/images/Rectangle.png" alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">1.23</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       15999
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
//     //     <p class="os-text-two size">laptops</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src="../01-css-task/images/Rectangle.png" alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">2.42</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       15999
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
//     //     <p class="os-text-two size">laptops</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src="../01-css-task/images/Rectangle.png" alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">1.96</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       15999
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
//     //     <p class="os-text-two size">laptops</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src="../01-css-task/images/Rectangle.png" alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">1.15</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       15999
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
//     //     <p class="os-text-two size">laptops</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src="../01-css-task/images/Rectangle.png" alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">1.45</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       15999
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">Ноутбук Acer Aspire 3 A315-57G-336G <br> (NX.HZREU.01S) Charcoal Black</p>
//     //     <p class="os-text-two size">laptops</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     // `
//
//
//     // return `
//     // <div class="wrapper-component">
//     //   <div class="os-img">
//     //     <img src=${obj.images[0]} alt="foto">
//     //   </div>
//     //   <div class="os-price">
//     //     <div class="os-price-star">
//     //       <p class="size">${obj.rating}</p>
//     //       <img src="../01-css-task/images/Star.png" alt="icon">
//     //     </div>
//     //
//     //     <p class="os-price-price size">
//     //       ${obj.price}
//     //     </p>
//     //   </div>
//     //   <div class="os-text">
//     //     <p class="size">${obj.title}</p>
//     //     <p class="os-text-two size">${obj.category}</p>
//     //   </div>
//     //   <div class="os-footer size">
//     //     <p>add to cart</p>
//     //   </div>
//     // </div>
//     //
//     // `
//   }
//
//
//   render() {
//     const block = document.createElement('div');
//     block.classList = "block";
//
//     this.data.map((item) => new this.Component(item).element)
//       .forEach((elem) => {block.append(elem)});
//
//     this.element = block;
//   }
//
//   // render() {
//   //   const block = document.createElement('div');
//   //   block.classList = 'block';
//   //   block.innerHTML = this.getT();
//   //   this.element = block;
//   // }
//
// }


export default class CardsList {

}
