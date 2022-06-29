'use strict'

import Filter from "../../filters-list/02-js-task/filters-list.js";

export default class SideBar {
  constructor () {
    this.render();
    this.renderFilters();
  }

  getTeamplate () {
    return `
        <div class=""side-bar__price>
          <h3 class="side-bar__title">Price</h3>
        </div>
        <div class=""side-bar__category>
          <h3 class="side-bar__title category">Category</h3>
          <div class="filters-list" data-element="category"></div>
        </div>
        <hr>
        <div class=""side-bar__brand>
          <h3 class="side-bar__title">Brand</h3>
          <div class="filters-list" data-element="brand"></div>
        </div>
        <hr>
        <div class=""side-bar__rating>
          <h3 class="side-bar__title">Rating</h3>
        </div>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }

  renderFilters () {
    const filter = new Filter();
    const filterContainer = this.element.querySelector('[data-element="category"]');
    filterContainer.append(filter.element);
  }
}

