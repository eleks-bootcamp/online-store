export default class Pagination {
  constructor () {
    this.render();
  }

  getTemplate () {
    return `
    <div>
    <div>i class="bi bi-chevron-left"></i>/div>

   <div>${this.getPages}</div>

  </div><i class="bi bi-chevron-right"></i></div>

    <div>right</div>
    </div>

    `;
  }
  getPages(){
   return `<div> <div class="Buttons-box">
    <button class="Buttons"> 1</button>
    <button class="Buttons"> 2</button>
    <button class="Buttons"> 3</button>
    <button class="Buttons"> 4</button>
    <button class="Buttons"> 5</button>
    <button class="Buttons"> 6</button>
    <button class="Buttons"> 7</button>
    <button class="Buttons"> 8</button>
    <button class="Buttons"> 9</button>
    <button class="Buttons">10</button>
    <button class="Buttons">11</button>
    <button class="Buttons">12</button>
    </div>
    `;
  }

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }
}
