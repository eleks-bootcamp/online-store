'use strict';

export default class SearchBox {
  constructor() {

     this.render();
     this.addEventListener();
  }

  getTemplate() {
    return `
      <div data-element="searchBoxWrapper">
        <input type="text" id="text-to-search" placeholder="Search" data-element="searchBoxWrapper">
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element;
  }

  addEventListener() {
    const searchBoxWrapper = this.element.querySelector('[data-element="searchBoxWrapper"]');

    searchBoxWrapper.addEventListener('input', e => {
      if (e.target.type === 'text') {
        let data = e.data;
        console.log(data);
        this.dispatchEvent(data);
      }
    });
  }

  dispatchEvent(data) {
    const customEvent = new CustomEvent ('input-text', {
      detail: data
    });

    this.element.dispatchEvent(customEvent);
  }
}
