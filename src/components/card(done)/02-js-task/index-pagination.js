export default class Pagination {
  defaultPagesSize = 12;
  constructor ({activePageIndex = 0} = {}) {
    this.activePageIndex = activePageIndex;
    this.render();
    this.addEventListeners();

  }

  getTemplate () {
    return `
    <div class="Pagination-wrapper">
    <button class="Pagination-chevron-style" data-element="nav-prev"><i class="bi bi-chevron-left"></i></button>

   ${this.getPages()}

   <button class="Pagination-chevron-style" data-element="nav-next"><i class="bi bi-chevron-right"></i></button>


    </div>

    `;
  }
  getPages(){
   return `
     <div class="Pagination-Buttons-box" data-element="pagintaion-list">
      ${new Array(this.defaultPagesSize).fill(1).map((item, index)=>{
        return this.getPageTemplate(index);
      }).join('')}

     </div>
      `;
  }

  getPageTemplate(pageIndex = 0){
    const isActive = pageIndex === this.activePageIndex ? 'Pagination-Active' : '';
    return `
    <button class="Pagination-Buttons ${isActive}" data-page-index="${pageIndex}"> ${pageIndex + 1}</button>
    `;
  }



setPage(pageIndex = 0){
  if (pageIndex === this.activePageIndex) return;
  if (pageIndex > this.defaultPagesSize - 1 || pageIndex < 0) return;

const activePage = this.element.querySelector('.Pagination-Buttons.Pagination-Active');

if (activePage){
  activePage.classList.remove('Pagination-Active');
}

const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`);

if (nextActivePage){
   nextActivePage.classList.add('Pagination-Active');

   this.activePageIndex = pageIndex;
}

}

nextPage(){
  const nextPageIndex = this.activePageIndex + 1;
  this.setPage(nextPageIndex);
}

prevPage(){
  const prevPageIndex = this.activePageIndex -1;
  this.setPage(prevPageIndex);
}

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }
  addEventListeners () {
    const prevPageBtn = this.element.querySelector(`[data-element="nav-prev"]`);
    const nextPageBtn = this.element.querySelector(`[data-element="nav-next"]`);
    const pagesList = this.element.querySelector(`[data-element="pagintaion-list"]`)

    prevPageBtn.addEventListener('click', () =>{this.prevPage();
    });

    nextPageBtn.addEventListener('click', () => {this.nextPage();
    });

    pagesList.addEventListener('click', event => {
      const pageItem = event.target.closest('.Pagination-Buttons');
      if (!pageItem) return;
      const {pageIndex} = pageItem.dataset;

      this.setPage(parseInt(pageIndex,10));
       } )
  }
}
