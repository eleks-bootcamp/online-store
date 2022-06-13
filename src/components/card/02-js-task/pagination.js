
export default class Pagination {
    constructor ({
        activePageIndex = 0,
        totalPages = 0
    } = {}) {
        this.activePageIndex = activePageIndex;
        this.totalPages = totalPages;
        this.render();
        this.addEventListeners();
    }s

    getTemplate() {
        return ` 
             <nav class="card-pagination font-montserrat-400">
                <a href="#" class="pagination-arrow-left" data-element="nav-prev">
                    <i class="bi bi-chevron-left"></i>
                </a>
                ${this.getPages()}
                <a href="#" class="pagination-arrow-right" data-element="nav-next" >
                    <i class="bi bi-chevron-right"></i>
                </a>
             </nav>
        `;
    };
    getPages() {
        return `
        <ul class="pagination-block" data-element="pagination">
            ${new Array(this.totalPages).fill(1).map((item, index) => {
                return this.getPageTemplate(index);
            }).join('')}
         </ul>
         
         `
    };
    getPageTemplate(pageIndex = 0) {

        const isActive = pageIndex === this.activePageIndex ? 'active' : '';

        return `
        <li >
            <a href="#" 
            data-element="page-link"
            data-page-index="${pageIndex}" 
            class="pagination-item ${isActive}">
            ${pageIndex + 1}
            </a>
        </li>`
            }
    setPage (pageIndex = 0) {
    

        if (pageIndex === this.activePageIndex) return;
        if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

        this.dispatchEvent(pageIndex);

        const activePage = this.element.querySelector('.pagination-item.active');

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
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper.firstElementChild;
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
        const pageItem = event.target.closest('.pagination-item');
        if (!pageItem) return;

        const {pageIndex} = pageItem.dataset;

        this.setPage(parseInt(pageIndex, 10));
    });
    
    };

    dispatchEvent (pageIndex) {
        const customEvent = new CustomEvent('page-changed', {
            detail: pageIndex
        });

        this.element.dispatchEvent(customEvent);
    };


};