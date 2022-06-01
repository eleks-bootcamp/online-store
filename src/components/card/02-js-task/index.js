export default class Card {

    constructor(someProduct) {
      this.state = someProduct;
      this.myRender();
    }

    getTemplate() {
      return `
    <div class="wrapper">
    <!-- Card component -->
    <div class="box">
      <div
        class="element-img"
        style="
          background-image: url(${this.state.images[0]});
        "
      ></div>
      <div class="os-product">
        <div class="os-product-wrapper">
          <div class="rating">
            <span class="number">${this.state.rating}</span>
            <img class="bistar" src="./img/Star 2 (Stroke).png" alt="star"> </i>
          </div>
          <div class="product-price">${this.state.price}</div>
        </div>
        <h3 class="title">${this.state.title}</h3>
        <p class="category">${this.state.category}</p>
      </div>
      <footer class="footer">
      <div class="button">
        ADD TO CART
      </div>
      </footer>
    </div>
  </div>
    `;

    return result
    }

    update (data = {}) {
      this.state = data;
      this.ComponentElement.innerHTML = this.getTemplate();
    }

    myRender() {
      const element = document.createElement("div");

      element.innerHTML = this.getTemplate();

      this.ComponentElement = element;
    }
  }

  const myRootElement = document.querySelector("#root");
// class Component {
//   constructor(someProduct) {
//     this.state = someProduct;
//     this.myRender();
//   }

//   getTemplate() {
//     return `
//   <div class="wrapper">
//   <!-- Card component -->
//   <div class="box">
//     <div
//       class="element-img"
//       style="
//         background-image: url(${this.state.images[0]});
//       "
//     ></div>
//     <div class="os-product">
//       <div class="os-product-wrapper">
//         <div class="rating">
//           <span class="number">${this.state.rating}</span>
//           <img class="bistar" src="./img/Star 2 (Stroke).png" alt="star"> </i>
//         </div>
//         <div class="product-price">${this.state.price}</div>
//       </div>
//       <h3 class="title">${this.state.title}</h3>
//       <p class="category">${this.state.category}</p>
//     </div>
//     <footer class="footer">
//     <div class="button">
//       ADD TO CART
//     </div>
//     </footer>
//   </div>
// </div>
//   `;
//   }

//   update (data = {}) {
//     this.state = data;

//     this.ComponentElement.innerHTML = this.getTemplate();

//   }

//   myRender() {
//     const element = document.createElement("div");

//     element.innerHTML = this.getTemplate();

//     this.ComponentElement = element;
//   }
// }

// const obj = new Component(product);

// const myRootElement = document.querySelector("#root");


// myRootElement.append(obj.ComponentElement);

// obj.update(monitor);
