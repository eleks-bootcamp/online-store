export default class Pagination {
  constructor ({activePageIndex = 0} = {}){
    this.activePageIndex = activePageIndex
    this.defaultPagesSize = 12;
    this.render();
    this.addEventListener();

  }

    getTemplate () {
       return `
        <div class="wrapper">
          <div class="page-link back" data-element="nav-prev">
           <a href="#">
             <i class="bi bi-chevron-left"></i>
           </a>
          </div>
           ${this.getPages()}
          <div class="page-link next" data-element="nav-next">
            <a href="#">
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
         </div>

      `;
    }

    getPages () {
      return `
          <ul class="page-list" data-element="pagination">
            ${new Array(this.defaultPagesSize).fill(1).map((item, index) => {
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
    if (pageIndex > this.defaultPagesSize - 1 || pageIndex < 0) return;

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

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page-link');

      if (pageItem === null) return;

      const pageIndex = pageItem.dataset.pageIndex;

      this.setPage(parseInt(pageIndex, 10));

    })

    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');

    prevPageBtn.addEventListener('click', event => {
      this.prevPage();
    });

    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');

    nextPageBtn.addEventListener('click', event => {
      this.nextPage();
    });
  }
}
