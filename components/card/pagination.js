export default class Pagination {
  
	constructor ({
    activePageIndex = 0,
    totalPages = 0
  } = {}) {
    this.activePageIndex = activePageIndex
    this.totalPages = totalPages
    this.render()
    
    this.addEventListeners ()
  }

  getTempLate () {
    return `
      <nav>
        <a href="#" data-element="nav-prev" class="page_link prev">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35404 0.646039C7.4006 0.692485 7.43754 0.747661 7.46275 0.808406C7.48796 0.869151 7.50093 0.934272 7.50093 1.00004C7.50093 1.06581 7.48796 1.13093 7.46275 1.19167C7.43754 1.25242 7.4006 1.30759 7.35404 1.35404L1.70704 7.00004L7.35404 12.646C7.44793 12.7399 7.50067 12.8673 7.50067 13C7.50067 13.1328 7.44793 13.2602 7.35404 13.354C7.26015 13.4479 7.13281 13.5007 7.00004 13.5007C6.86726 13.5007 6.73993 13.4479 6.64604 13.354L0.646039 7.35404C0.599476 7.30759 0.562533 7.25242 0.537326 7.19167C0.51212 7.13093 0.499146 7.06581 0.499146 7.00004C0.499146 6.93427 0.51212 6.86915 0.537326 6.80841C0.562533 6.74766 0.599476 6.69248 0.646039 6.64604L6.64604 0.646039C6.69248 0.599476 6.74766 0.562533 6.80841 0.537327C6.86915 0.51212 6.93427 0.499146 7.00004 0.499146C7.06581 0.499146 7.13093 0.51212 7.19167 0.537327C7.25242 0.562533 7.30759 0.599476 7.35404 0.646039Z" fill="black"/>
          </svg> 
        </a>
        ${this.getPages()}
        <a href="#" data-element="nav-next" class="page_link next">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.645917 0.646039C0.692363 0.599476 0.747538 0.562533 0.808283 0.537327C0.869028 0.51212 0.93415 0.499146 0.999917 0.499146C1.06568 0.499146 1.13081 0.51212 1.19155 0.537327C1.2523 0.562533 1.30747 0.599476 1.35392 0.646039L7.35392 6.64604C7.40048 6.69248 7.43742 6.74766 7.46263 6.80841C7.48784 6.86915 7.50081 6.93427 7.50081 7.00004C7.50081 7.06581 7.48784 7.13093 7.46263 7.19167C7.43742 7.25242 7.40048 7.30759 7.35392 7.35404L1.35392 13.354C1.26003 13.4479 1.13269 13.5007 0.999917 13.5007C0.867141 13.5007 0.739804 13.4479 0.645917 13.354C0.55203 13.2602 0.499285 13.1328 0.499285 13C0.499285 12.8673 0.55203 12.7399 0.645917 12.646L6.29292 7.00004L0.645917 1.35404C0.599354 1.30759 0.562411 1.25242 0.537204 1.19167C0.511998 1.13093 0.499023 1.06581 0.499023 1.00004C0.499023 0.934272 0.511998 0.869151 0.537204 0.808406C0.562411 0.747661 0.599354 0.692485 0.645917 0.646039Z" fill="black"/>
          </svg>
        </a>
      </nav>
    `;
  }

  getPages() {
    return `
        <ul data-element="pagination">
          ${new Array(this.totalPages).fill(1).map((item, index) => {return this.getPageTemplate(index);}).join('')}
        </ul>`;
  }
  getPageTemplate(pageIndex = 0) {
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';
    return `<li>
      <a href="#" 
        data-element="page_link" 
        class="page_link ${isActive}" 
        data-page-index="${pageIndex}">
        ${pageIndex + 1}
      </a>
    </li>`;
  }

  setPage(pageIndex = 0) {
    if (pageIndex === this.activePageIndex) return;
    if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

    this.dispatchEvent(pageIndex)

    const activePage = this.element.querySelector('.page_link.active');

    if (activePage) {
      activePage.classList.remove('active');
    }
    const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`)

    if (nextActivePage) {
      nextActivePage.classList.add('active')
    }

    this.activePageIndex = pageIndex
  }

  nextPage() {
    const nextPageIndex = this.activePageIndex + 1;
    this.setPage(nextPageIndex)
  }

  prevPage() {
    const prevPageIndex = this.activePageIndex - 1;
    this.setPage(prevPageIndex)
  }


	render() {
    const addPagination = document.createElement('div')
    addPagination.innerHTML = this.getTempLate()
    this.element = addPagination
  }
  addEventListeners() {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]')
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]')
    const pagesList = this.element.querySelector('[data-element="pagination"]')

    prevPageBtn.addEventListener('click', () => {
      this.prevPage()
    })
    nextPageBtn.addEventListener('click', () => {
      this.nextPage() 
    })

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page_link')
      if (!pageItem) return;
      const { pageIndex } = pageItem.dataset;
      this.dispatchEvent(pageIndex)

      this.setPage(parseInt(pageIndex, 10))
    })
  } 
    dispatchEvent (pageIndex) {
      const customEvent = new CustomEvent('page-changed', {
        detail: pageIndex
      })
      this.element.dispatchEvent(customEvent)
    }
  
  
}
