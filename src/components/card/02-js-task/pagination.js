export default class Pagination {
  constructor() {
    this.defaultPagesSize=12;
    this.render();

  }
getPages(){
    return new Array(this.defaultPagesSize).fill(1).map((item, index) => {
      return this.getPageTemplate(index);
    }).join('')

}
  HTMLForm(){
    return `
   <ul class="pagination">
    <li class="pagination-element bi bi-chevron-left"></li>
  ${this.getPages()}
    <li class="pagination-element bi bi-chevron-right"></li>
  </ul>
    `;

}
getPageTemplate(pageIndex=0){
    return `<li class="pagination-element active" data-page-index="${pageIndex}">${pageIndex+1}</li>`
}
  render(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML=this.HTMLForm();
    this.element = wrapper;
  }
}
