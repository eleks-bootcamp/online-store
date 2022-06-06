export default class Pagination {
  defaultPagesSize = 12;

  constructor({activePageIndex = 0} = {}) {
    this.activePageIndex = activePageIndex;
    this.render();
    this.addEventListeners();
  };

  getTemplate () {
    return `
      <div class="wrapper">
        <div class="wrapper-pagination">
          <button class="btn-back btn-button-class" data-element="nav-prev">
            <i class="bi bi-chevron-left"></i>
          </button>
          ${this.getPages()}
          <button class="btn-forward btn-button-class" data-element="nav-next">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  };

  getPages () {
    return `
      <div data-element="pagination">
        ${new Array(this.defaultPagesSize).fill(1).map((item, index) => {
          return this.getPageTemplate(index);
        }).join('')}
      </div>
    `;
  };

  getPageTemplate (pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';
    return `<button class="btn-1 btn-button-class ${isActive}" data-page-index="${pageIndex}">${pageIndex + 1}</button>`
  };

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.defaultPagesSize -1 || pageIndex < 0) return;

    const activePage = this.element.querySelector('.btn-button-class.active');

    if (activePage) {
      activePage.classList.remove('active');
    }

    const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`)

    if (nextActivePage) {
      nextActivePage.classList.add('active');
    }

    this.activePageIndex = pageIndex;
  };

  nextPage () {
    this.setPage(this.activePageIndex + 1);
  };

  prevPage () {
    this.setPage(this.activePageIndex - 1);
  };

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  };

  addEventListeners () {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');
    const pageList = this.element.querySelector('[data-element="pagination"]');

    prevPageBtn.addEventListener('click', () => {
      this.prevPage();
    });

    nextPageBtn.addEventListener('click', () => {
      this.nextPage();
    });

    pageList.addEventListener('click', event => {
      const pageItem = event.target.closest('.btn-button-class');

      if (!pageItem) return;

      const {pageIndex} = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10))
    });
  }
}
