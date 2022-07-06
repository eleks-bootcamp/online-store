'use strict';

export default class SearchBox {
  constructor() {

     this.render();
     this.addEventListener();
  }

  getTemplate() {
    return `
      <input type="text" id="text-to-search" placeholder="Search" data-element="searchInput">
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  addEventListener() {
    const searchBoxWrapper = this.element.querySelector('[data-element="searchInput"]');

    searchBoxWrapper.addEventListener('input', e => {
      this.dispatchEvent(e.target.value);
    });
  }

  dispatchEvent(data) {
    const customEvent = new CustomEvent('input-text', {
      detail: data
    });

    this.element.dispatchEvent(customEvent);
  }
}
