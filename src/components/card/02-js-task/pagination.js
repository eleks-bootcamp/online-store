export default class Pagination {
    defaultPagesSize = 12;
    
    constructor() {
        this.render();
    }

    getTemplatePage () {
        return `
        <div class="pagination">
            <a href="#" class="pagination-item" data-element="nav-prev">
                <i class="bi bi-chevron-left"></i>
            </a>
            ${this.getPages()}
            <a href="#" class="pagination-item" data-element="nav-next">
                <i class="bi bi-chevron-right"></i>
            </a>
        </div>`;
    }

    getPages () {
        return `
          <ul class="pagination-center" data-element="pagination">
            ${new Array(this.defaultPagesSize).fill(1).map((item, index) => {
                return this.getSize(index);
            }).join('')}
          </ul>
        `;
    }

    getSize (pageIndex = 0) {
        return `<li>
            <a href="#" data-element="page-link" class="pagination-item active" data-page-index="${pageIndex}">${pageIndex + 1}</a>
        </li>`;
    }

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplatePage();

        this.element = wrapper;
    }
}