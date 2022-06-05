export default class Pagination {
  element;

  constructor({ totalPages = 12, activePageIndex = 0 } = {}) {
    this.totalPages = totalPages;
    this.activePageIndex = activePageIndex;

    this.render();
    this.addEventListeners();
  }

  renderPageItem(pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? "active" : "";

    return `
      <li>
        <a href="#" data-element="page-link" class="page-link ${isActive}" data-page-index="${pageIndex}">
        ${pageIndex + 1}
        </a>
      </li>
    `;
  }

  getPages() {
    // let output = "";
    // for (let i = 1; i <= this.totalPages; i++) {
    //   output += this.renderPageItem(i);
    // }
    // return output;
    return new Array(this.totalPages)
      .fill(null)
      .map((_, i) => this.renderPageItem(i))
      .join("");
  }

  get template() {
    return `
      <a href="#" data-element="nav-prev"><img src="icons/chevron-left.svg"></a>
      <ul data-element="pagination" class="pagination__options">${this.getPages()}</ul>
      <a href="#" data-element="nav-next"><img src="icons/chevron-right.svg"></a>
    `;
  }

  setPage(pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    const activePage = this.element.querySelector(".page-link.active");

    if (activePage) {
      activePage.classList.remove("active");
    }

    const nextActivePage = this.element.querySelector(
      `[data-page-index="${pageIndex}"]`
    );

    if (nextActivePage) {
      console.log(
        this.element.querySelectorAll('[data-element="page-link"]')[pageIndex]
      );
      this.element
        .querySelectorAll('[data-element="page-link"]')
        [pageIndex].classList.add("active");
    }

    this.activePageIndex = pageIndex;
  }

  goToPrevPage() {
    const prevPageIndex = this.activePageIndex - 1;
    this.setPage(prevPageIndex);
  }

  goToNextPage() {
    const nextPageIndex = this.activePageIndex + 1;
    this.setPage(nextPageIndex);
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("pagination");

    wrapper.innerHTML = this.template;

    this.element = wrapper;
  }

  addEventListeners() {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');
    const pagesList = this.element.querySelector('[data-element="pagination"]');

    prevPageBtn.addEventListener("click", () => {
      this.goToPrevPage();
    });

    nextPageBtn.addEventListener("click", () => {
      this.goToNextPage();
    });

    pagesList.addEventListener("click", (event) => {
      const pageItem = event.target.closest(".page-link");

      if (!pageItem) return;

      const { pageIndex } = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10));
    });
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
