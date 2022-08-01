export default class Pagination {
  constructor (){
    this.defaultPagesSize = 12;
    this.render();
  }

    getTemplate () {
       return `
        <div class="wrapper">
          <div class="page-link back">
           <a href="#">
             <i class="bi bi-chevron-left"></i>
           </a>
          </div>
           ${this.getPages()}
          <div class="page-link next">
            <a href="#">
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
         </div>

      `;
    }

    getPages () {
      return `
          <ul class="page-list">
            ${new Array(this.defaultPagesSize).fill(1).map((item, index) => {
                return this.getPageTemplate(index)
            }).join(' ')}
          </ul>
       `;
    }

    getPageTemplate (pageIndex = 0) {

      return `
        <li class="page-link">
          <a href="#" data-page-index="${pageIndex}">${pageIndex + 1}</a>
        </li>
      `;

    }

  render () {
    const wrapper = document.createElement('div')

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}
