'use strict';

export default class Filter {
  constructor () {
    this.render();
  }

  getTeamplate () {
    return `
      <label for="check1">
        <div class="filter">
          <input type="checkbox" id="check1" class="check">
          <span>Monitors</span>
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
