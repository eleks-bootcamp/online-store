export default class Pagination {
  defoultPagesSize = 20;
  constructor({ activePageIndex = 0 } = {}) {
    this.activePageIndex = activePageIndex;
    this.render();
    this.addEventListeners();
  }
  getTemplate() {
    return `
    <section class="pagination">
    <div class="btn-prev" data-element="nav-prev"><a href="#" class="page-link"><i class="bi bi-chevron-left"></i></a></div>
    <div class="btn-double-prev" data-element="nav-double-prev"><a href="#" class="page-link"><i class="bi bi-chevron-double-left"></i></a></div>
    ${this.getPages()}
    <div class="btn-double-next" data-element="nav-double-next"><a href="#" class="page-link"><i class="bi bi-chevron-double-right"></i></a></div>
    <div class="btn-next" data-element="nav-next"><a href="#" class="page-link"><i class="bi bi-chevron-right"></i></a> </div>
  </section>
    `;
  }
  getPages() {
    return `
    <ul class="pagination-list" data-element="pagination">
      ${new Array(this.defoultPagesSize).fill(1).map((item, index) => {
      return this.getPageTemplate(index);
    }).join('')}
    </ul>
    `;
  }
  getPageTemplate(pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';
    return `
     <li class="pagination-item">
      <a href="#" data-element="page-link"
      class="page-link ${isActive}"data-page-index="${pageIndex}">${pageIndex + 1}</a>
     </li>
    `;
  }
  setPage(pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.defoultPagesSize - 1 || pageIndex < 0) return;
    const activePage = this.element.querySelector('.page-link.active');
    if (activePage) {
      activePage.classList.remove('active');
    }
    const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`)

    if (nextActivePage) {
      nextActivePage.classList.add('active');
    }
    this.activePageIndex = pageIndex;
  }
  nextPage() {
    const nextPageIndex = this.activePageIndex + 1;
    this.setPage(nextPageIndex);
  }
  prevPage() {
    const prevPageIndex = this.activePageIndex - 1;

    this.setPage(prevPageIndex);
  }
  render() {
    const wraper = document.createElement('div');
    wraper.innerHTML = this.getTemplate();
    this.element = wraper;
  }
  addEventListeners() {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');
    const pagesList = this.element.querySelector('[data-element="pagination"]');
    prevPageBtn.addEventListener('click', ()=> {
      this.prevPage();
    });
    nextPageBtn.addEventListener('click', () => {
      this.nextPage();
    });


    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page-link');
      if (!pageItem) return;
      const{ pageIndex }= pageItem.dataset;
      console.log(typeof pageIndex);
      this.setPage(parseInt(pageIndex, 10));
    });
  }
}
