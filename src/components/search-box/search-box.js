'use strict'

export default class SearchBox {
  constructor () {
    this.render();
    this.addEventListener();
  }

  getTeamplate () {
    return `
      <input type="text" placeholder="Search" id="text-search" class="search-box__search">
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }

  addEventListener () {
    const searchBoxWrapper = this.element.querySelector('.search-box__search');

    searchBoxWrapper.addEventListener('input', event => {
      this.dispatchEvent(event.target.value);
    });
  }

  dispatchEvent (data) {
    const customEvent = new CustomEvent('input-text', {
      detail: data
    });

    this.element.dispatchEvent(customEvent);
  }
}
