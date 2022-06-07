export default class Pagination {
  defaultPagesSize = 12;

  constructor ({activePageIndex = 0} = {}) {
    this.activePageIndex = activePageIndex;
    this.render();
    this.addEventListeners();
  }

  getTaemplate () {
    return `
      <nav class="pagination">
        <a href="#" class="pagination__page-link previous" data-element="nav-prev">
            <i class="pagination__back icon-arrow-left"></i>
        </a>
        ${this.getPages()}
        <a href="#" class="pagination__page-link next" data-element="nav-next">
          <i class="pagination__forward icon-arrow-right"></i>
        </a>
      </nav>
    `;
  }

  getPages () {
    return `
      <ul class="pagination__page-list" data-element="pagination">
        ${new Array(this.defaultPagesSize).fill('').map((item, index) => {
          return this.getPageTeamplate(index);
        }).join('')}
      </ul>
    `;
  }

  getPageTeamplate (pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `
      <li>
        <a href="#" data-element="page-link" class="pagination__page-link ${isActive}" data-page-index="${pageIndex}">${pageIndex + 1}</a>
      </li>
    `;
  }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.defaultPagesSize - 1 || pageIndex < 0) return;

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

    this.element = element;
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
}

const pagination = new Pagination({
  activePageIndex: 0
});

const rootElement = document.querySelector('#root');
rootElement.append(pagination.element);

