"use strict";

class Pagination {
  constructor () {
    this.defaultPagesSize = 12;
    this.render();
  }

  getTemplate () {
    return `
      <div class="pagination">
        <div class="pagination__arrow"></div>
        ${this.getPages()}
        <div class="pagination__arrow pagination__arrow_right"></div>
      </div>
    `;
  }

  getPages () {
    return `
      <ul class="pagination__list">
        ${new Array(this.defaultPagesSize).fill('').map((item, index) => {
          return this.getPageTemplate(index);
        }).join('')}
      </ul>
    `;
  }

  getPageTemplate (pageIndex = 0) {
    return `
      <li class="pagination__list-item">
        <a href="#" data-page-index="${pageIndex}">${pageIndex + 1}</a>
      </li>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }
}

const pagination = new Pagination();

const rootElement = document.querySelector('#root');

rootElement.append(pagination.element);
