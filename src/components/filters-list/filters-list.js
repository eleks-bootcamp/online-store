"use strict";

export default class Filter {
  constructor(data) {
    this.state = data;

    this.render();
  }

  getTemplate() {
    return `
      <label>
        <div class="filter">
          <input type="checkbox" data-element="${this.state.toLowerCase().split(' ').join('_')}">
          <span>${this.state}</span>
        </div>
      </label>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }
}
