export default class Pagination {


  constructor ({
    activePageIndex = 0,
    totalPages = 0
    } = {}){
    this.activePageIndex = activePageIndex;
    this.totalPages = totalPages;
    this.render();
    this.addEventListener();

  }

    getTemplate () {
       return `
       <div class="os-pagination">
          <a href="#" class="page-link back" data-element="nav-prev">
            <i class="bi bi-chevron-left"></i>
          </a>
        ${this.getPages()}
        <a href="#" class="page-link next" data-element="nav-next">
           <i class="bi bi-chevron-right"></i>
          </a>
       </div>
      `;
    }

    getPages () {
      return `
          <ul class="page-list" data-element="pagination">
            ${new Array(this.totalPages).fill(1).map((item, index) => {
                return this.getPageTemplate(index)
            }).join(' ')}
          </ul>
       `;
    }

    getPageTemplate (pageIndex = 0) {
      const isActivePage = pageIndex === this.activePageIndex ? 'active' : '';

      return `
        <li>
          <a href="#"
          class="page-link ${isActivePage}"
          data-page-index="${pageIndex}">
          ${pageIndex + 1}</a>
        </li>
      `;

    }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    this.dispathEvent(pageIndex);

    const activePage = this.element.querySelector('.page-link.active');

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
    const wrapper = document.createElement('div')

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }

  addEventListener () {
    const pagesList = this.element.querySelector(`[data-element="pagination"]`);

    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');

    prevPageBtn.addEventListener('click', event => {
      this.prevPage();
    });

    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');

    nextPageBtn.addEventListener('click', event => {
      this.nextPage();
    });

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page-link');

      if (!pageItem) return;

      const { pageIndex } = pageItem.dataset;

      this.setPage(parseInt(pageIndex, 10));
    });
  }

  dispathEvent (pageIndex) {
    const customEvent = new CustomEvent('page-changed', {
      detail: pageIndex
    });

    this.element.dispatchEvent(customEvent);
  }
}
