export default class Pagination {

  constructor() {
    this.defaultPagesSize = 7;
    this.myRender();
  }
  getTemplate() {
    return `
   <section class="pagination">
   <div class="btn-prev"> <a href="#"> <i class="bi bi-chevron-left"></i></a></div>
 ${this.getPages()}
   <div class="btn-next"> <a href="#"><i class="bi bi-chevron-right"></i></a> </div>
 </section>

   `;
  }
  getPages() {
    return `
  <ul>
    ${this.getPageTamplate(this.defaultPagesSize)}
  </ul>
   `;
  }
  getPageTamplate(pageIndex = 1) {
    let str = '';
    let allPages = '';
    let i = 1;
    do {
      str = `<li><a href="#page${i}">${i}</a></li>`;
      allPages += str;
      i++;
    }
    while (i <= pageIndex)
    console.log(allPages);
    return allPages;

  }
  myRender() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }
}
