'use strict'

export default class SearchBox {
  constructor (text) {
    this.text = text;

    this.render();
  }

  getTeamplate () {
    return `
      <input type="text" placeholder="Search" id="text-search" class="search">
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }
}

/* const search = new SearchBox();

const rootElement = document.querySelector('#root');
rootElement.append(search.element); */
