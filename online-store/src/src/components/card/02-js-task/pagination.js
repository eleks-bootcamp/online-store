export default class Pagination {
  constructor() {
    this.defaultPagesSize = 12;
    this.render();
  }

  getTemplate() {
    return `
  <div class="wrapper">
  <div class="item">&#60;</div>

  ${this.getPages()}

  <div class="item">&#62;</div>
  </div>
 ` ;
  }

  getPages() {
    return `
   ${new Array(this.defaultPagesSize).fill(1).map((item, index) => {
      return this.getPageTemplate(index);
    }).join('')}
  `;
  }

  getPageTemplate(pageIndex = 0) {
    return `
      <div class="item" ${pageIndex}>${pageIndex + 1}</div>
     `;
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }

}
