export default class Pagination {
  element;

  constructor({ totalPages = 10, page = 1 } = {}) {
    this.totalPages = totalPages;
    this.pageIndex = page - 1;

    this.render();
  }

  renderPageItem(number) {
    return `
      <li>
        <a href="#">${number}</a>
      </li>
    `;
  }

  getPages() {
    // let output = "";
    // for (let i = 1; i <= this.totalPages; i++) {
    //   output += this.renderPageItem(i);
    // }
    // return output;
    return new Array(this.totalPages).fill(null).map((_, i) => this.renderPageItem(i + 1)).join('');
  }

  get template() {
    return `
      <a href="#"><img src="icons/chevron-left.svg"></a>
      <ul class="pagination__options">${this.getPages()}</ul>
      <a href="#"><img src="icons/chevron-right.svg"></a>
    `;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("pagination");

    wrapper.innerHTML = this.template;

    this.element = wrapper;
  }

  goToPrevPage() {
    // ... your logic
  }

  goToNextPage() {
    // ... your logic
  }

  remove() {
    if (this.elemnt) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
