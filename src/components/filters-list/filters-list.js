"use strict";

export default class Filter {
  constructor(categories) {
    this.state = categories;

    this.render();
  }

  getTemplate() {
    return `
      <label for="${this.state[2]}">
        <div class="filter">
          <input type="checkbox" id="${this.state[2]}">
          <span>${this.state[2]}</span>
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
