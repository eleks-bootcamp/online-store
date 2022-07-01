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

  getTemplate () {
    return `
      <nav class="pagination">
        <a href="#" data-element="nav-prev" class="prev-page pages">
          <i class="bi bi-chevron-left"></i>
        </a>
          ${this.getPages()}
        <a href="#" data-element="nav-next" class="next-page pages">
          <i class="bi bi-chevron-right"></i>
        </a>
      </nav>
    `;
  }

  getPages () {
    return  `
    <ul data-element="pagination" class="pages-list">
      ${new Array(this.totalPages).fill(1).map((item, index) => {
        return this.getPageTemplate(index);
      }).join('')}
    </ul>
    `

 }

 getPageTemplate (pageIndex = 0) {
   const isActive = pageIndex === this.activePageIndex ? 'active' : '';

   return `
   <li><a href="#" data-element="page-link" class="pages ${isActive}" data-page-index = "${pageIndex}">
    ${pageIndex + 1}</a></li>
   `

 }

  setPage (pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    this.dispatchEvent(pageIndex);

    const activePage = this.element.querySelector('.pages.active');

    if (activePage) {
      activePage.classList.remove('active');
    }

    const nextActivePage = this.element.querySelector(`[data-page-index = "${pageIndex}"]`);

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
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }

  addEventListeners () {
    const prevPageButton = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageButton = this.element.querySelector('[data-element="nav-next"]');
    const pagesList = this.element.querySelector('[data-element="pagination"]');

    nextPageButton.addEventListener('click', () => {
      this.nextPage()
    });
    prevPageButton.addEventListener('click', () => {
      this.prevPage()
    });

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.pages');

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



