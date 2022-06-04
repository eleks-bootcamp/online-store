export default class Pagination {


  constructor({activePageIndex}) {
    this.defaultPagesSize = 12;
    this.activePageIndex = activePageIndex;
    this.render();
  }

  getPages() {
    return new Array(this.defaultPagesSize).fill(1).map((item, index) => {
      return this.getPageTemplate(index);
    }).join('')
  }

  getTemplate() {
    return `
    <div class="pagination">
    <div class="siz">
    <img  class="imgP" src="../../pagination/01-css-task/images/arrow-left.png" alt="arrow-left">
    </div>

    <div class="numbers">${this.getPages()}</div>

    <div class="siz">
    <img class="imgP"  src="../../pagination/01-css-task/images/arrow-right.png" alt="arrow-right">
    </div>
  </div>
    `
  }

  getPageTemplate(pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `<li
                class="siz ${isActive}"
                data-page-index="${pageIndex}">
                    ${pageIndex + 1}
            </li>`
  }


  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.state = wrapper;
  }
}
