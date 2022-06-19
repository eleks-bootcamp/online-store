export default class Pagination {
  constructor({activePageIndex=0}={},
              totalPages=0) {
    this.totalPages=totalPages;
    this.activePageIndex=activePageIndex;
    this.render();

    console.log(this.activePageIndex)
    this.addEventListeners();
  }
getPages(){
    return new Array(this.totalPages).fill(1).map((item, index) => {
      return this.getPageTemplate(index);
    }).join('')

}
  HTMLForm(){
    return `
   <ul class="pagination" data-element="pagination">
    <li class="pagination-element-arrow bi bi-chevron-left" data-element="prev"></li>
  ${this.getPages()}
    <li class="pagination-element-arrow bi bi-chevron-right" data-element="next"></li>
  </ul>
    `;

}
getPageTemplate(pageIndex=0){
  console.log(this.activePageIndex)
    const isActive = pageIndex === this.activePageIndex ? 'active' : '';

    return `<li class="pagination-element ${isActive}" data-element="pagination" data-page-index="${pageIndex}">${pageIndex+1}</li>`
}
setPage (pageIndex=0){
    if(pageIndex===this.activePageIndex)return;
    if(pageIndex>this.totalPages-1 || pageIndex<0)return;
  this.dispatchEvent(pageIndex);
const activePage = this.element.querySelector('.pagination-element.active')
if(activePage){
  activePage.classList.remove('active')
}

const page=this.element.querySelector(`[data-page-index="${pageIndex}"]`);
if (page){
  page.classList.add('active');
}
this.activePageIndex=pageIndex;
  }
nextPage (){
    const nextSetIndex=this.activePageIndex+1;
  this.setPage(nextSetIndex);
}
prevPage(){
  const prevSetIndex=this.activePageIndex-1;
  this.setPage(prevSetIndex);
  console.log(this.setPage(prevSetIndex))

}
  render(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML=this.HTMLForm();
    this.element = wrapper;
  }
  addEventListeners(){
    const prevPageBtn=this.element.querySelector(`[data-element="prev"]`);
    const nextPageBtn=this.element.querySelector(`[data-element="next"]`);
    const pagesList=this.element.querySelector(`[data-element="pagination"]`);

    prevPageBtn.addEventListener('click', event => {
      this.prevPage()
    });
    nextPageBtn.addEventListener('click', event => {
      this.nextPage()
    });
    pagesList.addEventListener('click', event =>{
  const pageItem=event.target.closest('.pagination-element');
  if (!pageItem) return ;
   const {pageIndex}=pageItem.dataset;

    this.setPage(Number(pageIndex));
    console.log(pageIndex);
  })

  }
  dispatchEvent(pageIndex){
    const customEvent = new CustomEvent('page-changer',{
      detail: pageIndex
    } );
    this.element.dispatchEvent(customEvent);
  }
}

