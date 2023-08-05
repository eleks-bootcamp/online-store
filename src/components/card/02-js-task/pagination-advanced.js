export default class Pagination {
  constructor ({
    totalElements = 0,
    activePageIndex = 0,
    pageSize = 0,
  } = {}) {
    if (activePageIndex < 0 || activePageIndex > totalElements - 1) {
      throw Error(`Prop "activePageIndex" must be in range "0-${totalElements - 1}`);
    }

    this.totalElements = totalElements;
    this.totalPages = Math.ceil(totalElements / pageSize);
    this.activePageIndex = activePageIndex;
    this.pageSize = pageSize;
    this.rangeIndex = this.getRangeIndex(activePageIndex);

    this.render();
    this.addEventListeners();
  }

  getRangeIndex (activePageIndex) {
    let rangeIndex = 0;

    for (let index = 0; index < this.totalPages; index++) {
      const max = this.pageSize * (index + 1) - 1;
      const min = index * this.pageSize;

      if (activePageIndex <= max && activePageIndex >= min) {
        rangeIndex = index;
        break;
      }
    }

    return rangeIndex;
  }

  get maxRangePageIndex () {
    const max = this.pageSize * (this.rangeIndex + 1) - 1;

    return max > this.totalElements ? this.totalElements - 1 : max;
  }

  get minRangePageIndex () {
    return this.rangeIndex * this.pageSize;
  }

  nextPage () {
    const nextPageIndex = this.activePageIndex + 1;

    if (nextPageIndex > this.maxRangePageIndex) {
      this.nextRange(nextPageIndex);
    } else {
      this.setPage(nextPageIndex);
    }
  }

  prevPage () {
    const prevPageIndex = this.activePageIndex - 1;

    if (prevPageIndex < this.minRangePageIndex) {
      this.prevRange(prevPageIndex);
    } else {
      this.setPage(prevPageIndex);
    }
  }

  nextRange (pageIndex) {
    const rangeIndex = this.rangeIndex + 1;

    this.update(rangeIndex, pageIndex);
  }

  prevRange (pageIndex) {
    const rangeIndex = this.rangeIndex - 1;

    this.update(rangeIndex, pageIndex);
  }

  update(rangeIndex, pageIndex) {
    if (rangeIndex < 0 || rangeIndex > this.totalPages - 1) return;

    this.rangeIndex = rangeIndex;
    this.activePageIndex = pageIndex ?? this.rangeIndex * this.pageSize;

    const pagination = this.element.querySelector('[data-element="pagination"]');

    pagination.innerHTML = this.getPages();
  }

  getTemplate () {
    return `
      <nav class="os-pagination">
        <a href="#" class="page-link previous" data-element="nav-prev">
          <i class="bi bi-chevron-left"></i>
        </a>

        <a href="#" class="page-link" data-element="nav-prev-range">
          <i class="bi bi-chevron-double-left"></i>
        </a>

        <ul class="page-list" data-element="pagination">
          ${this.getPages()}
        </ul>

        <a href="#" class="page-link" data-element="nav-next-range">
          <i class="bi bi-chevron-double-right"></i>
        </a>

         <a href="#" class="page-link next" data-element="nav-next">
          <i class="bi bi-chevron-right"></i>
        </a>
      </nav>
    `;
  }

  getRange(start = 0, end = 0) {
    return [...Array(end - start).keys()].map(index => index + start);
  }

  getPageIndexes () {
    const start = this.rangeIndex * this.pageSize;
    const end = start + this.pageSize;
    const endFixed = end > this.totalElements ? this.totalElements : end;

    return this.getRange(start, endFixed);
  }

  getPages () {
    const range = this.getPageIndexes();

    const pages = range.map((item, index) => {
      return this.getPageTemplate(item);
    })

    return pages.join('');
  }

  getPageTemplate (pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `<li>
      <a href="#"
        data-element="page-link"
        class="page-link ${isActive}"
        data-page-index="${pageIndex}">
        ${pageIndex + 1}
      </a>
    </li>`;
  }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.maxRangePageIndex || pageIndex < this.minRangePageIndex) return;

    this.activePageIndex = pageIndex;

    const activePage = this.element.querySelector('.page-link.active');

    if (activePage) {
      activePage.classList.remove('active');
    }

    const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`);

    if (nextActivePage) {
      nextActivePage.classList.add('active');
    }
  }

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  addEventListeners () {
    const prevRangeBtn = this.element.querySelector('[data-element="nav-prev-range"]');
    const nextRangeBtn = this.element.querySelector('[data-element="nav-next-range"]');

    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');

    const pagesList = this.element.querySelector('[data-element="pagination"]');

    prevRangeBtn.addEventListener('click', () => {
      this.prevRange();
    });

    nextRangeBtn.addEventListener('click', () => {
      this.nextRange();
    });

    prevPageBtn.addEventListener('click', () => {
      this.prevPage();
    });

    nextPageBtn.addEventListener('click', () => {
      this.nextPage();
    });

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page-link');

      if (!pageItem) return;

      const { pageIndex } = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10));
    });
  }
}
