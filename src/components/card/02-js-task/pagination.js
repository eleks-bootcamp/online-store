export default class Pagination {
  defaultPagesSize=12;

  constructor() {
    this.render();
  }

  getTemplate() {
    return `
      <div class="pagination">
        <div class="page left">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </div>
            ${this.getPages()}
            <div class="page right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
    `;
  }

  getPages() {
    return `
      <div class="pages">
        ${new Array(this.defaultPagesSize).fill(1).map((item,index)=>{
          return this.getPageTemplate(index);
        }).join('')}
      </div>
    `;
  }

  getPageTemplate(pageIndex=0) {
   return `
    <div class="page ${pageIndex}">${pageIndex+1}</div>
   `;
  }

  render() {
    const wraper=document.createElement('div');
    wraper.innerHTML=this.getTemplate();
    this.element = wraper;
  }
}
