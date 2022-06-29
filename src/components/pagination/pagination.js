'use strict';

export default class Pagination {
  constructor ({
    activePageIndex = 0,
    totalPages = 0
  } = {}) {
    this.activePageIndex = activePageIndex;
    this.totalPages = totalPages;

    this.render();
    this.addEventListeners();
  }

  getTaemplate () {
    return `
      <nav class="pagination">
        <div class="pagination__page-link previous" data-element="nav-prev">
            <i class="pagination__back icon-arrow-left"></i>
        </div>
        ${this.getPages()}
        <div class="pagination__page-link next" data-element="nav-next">
          <i class="pagination__forward icon-arrow-right"></i>
        </div>
      </nav>
    `;
  }

  getPages () {
    return `
      <ul class="pagination__page-list" data-element="pagination">
        ${new Array(this.totalPages).fill('').map((item, index) => {
          return this.getPageTeamplate(index);
        }).join('')}
      </ul>
    `;
  }

  getPageTeamplate (pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `
      <li data-element="page-link" class="pagination__page-link ${isActive}" data-page-index="${pageIndex}">
       ${pageIndex + 1}
      </li>
    `;
  }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    this.dispatchEvent(pageIndex);

    const activePage = this.element.querySelector('.pagination__page-link.active');

    if (activePage) {
      activePage.classList.remove('active');
    }

    const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`);

    if (nextActivePage) {
      nextActivePage.classList.add('active');
    }

    this.activePageIndex = pageIndex;
  }

  nextPage () {
    const nextPageIndex = this.activePageIndex + 1;

    this.setPage(nextPageIndex);
  }

  prevPage () {
    const prevPageIndex = this.activePageIndex - 1;

    this.setPage(prevPageIndex);
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTaemplate();

    this.element = element.firstElementChild;
  }

  addEventListeners () {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');
    const pagesList = this.element.querySelector('[data-element="pagination"]');

    prevPageBtn.addEventListener('click', () => {
      this.prevPage();
    });

    nextPageBtn.addEventListener('click', () => {
      this.nextPage();
    });

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.pagination__page-link');

      if (!pageItem) return;

      const { pageIndex } = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10));
    });
  }

  dispatchEvent (pageIndex) {
    const customEvent = new CustomEvent('page-changed', {
      detail: pageIndex
    });

    this.element.dispatchEvent(customEvent);
  }
}
