'use strict';

export default class Filter {
  constructor (data) {
    this.state = data;

    this.render();
  }

  getTeamplate () {
    return `
      <label>
        <div class="filter">
          <input type="checkbox" data-element="${this.state.toLowerCase().split(' ').join('_')}" class="check">
          <span>${this.state}</span>
        </div>
      </label>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element.firstElementChild;
  }
}
