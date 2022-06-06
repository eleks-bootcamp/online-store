"use strict";

class Pagination {
  constructor ({ activePageIndex = 0 } = {}) {
    this.defaultPagesSize = 12;
    this.activePageIndex = activePageIndex;

    this.render();
    this.addEventListeners();
  }

  getTemplate () {
    return `
      <div class="pagination">
        <a href="#" class="pagination__arrow" data-element="arrow-left"></a>
        ${this.getPages()}
        <a href="#" class="pagination__arrow pagination__arrow_right" data-element="arrow-right"></a>
      </div>
    `;
  }

  getPages () {
    return `
      <ul class="pagination__list" data-element="pagination">
        ${new Array(this.defaultPagesSize).fill('').map((item, index) => {
          return this.getPageTemplate(index);
        }).join('')}
      </ul>
    `;
  }

  getPageTemplate (pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `<li class="pagination__list-item ${isActive}" data-page-index="${pageIndex}">
        <a href="#">${pageIndex + 1}</a>
      </li>`;
  }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.defaultPagesSize - 1 || pageIndex < 0) return;

    const activePage = this.element.querySelector('.pagination__list-item.active');

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

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  addEventListeners () {
    const prevPageBtn = this.element.querySelector('[data-element="arrow-left"]');
    const nextPageBtn = this.element.querySelector('[data-element="arrow-right"]');
    const pagesList = this.element.querySelector('[data-element="pagination"]');

    prevPageBtn.addEventListener('click', () => {
      this.prevPage();
    });

    nextPageBtn.addEventListener('click', () => {
      this.nextPage();
    });

    pagesList.addEventListener('click', e => {
      const pageItem = e.target.closest('.pagination__list-item');

      if (!pageItem) return;

      const { pageIndex } = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10));
    });
  }
}

const pagination = new Pagination({
  activePageIndex: 0
});

const rootElement = document.querySelector('#root');

rootElement.append(pagination.element);
