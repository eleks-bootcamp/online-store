"use strict";

import Filter from "../filters-list/filters-list.js";
import { API } from "../API/api.js";

export default class SideBar {
  constructor() {


    this.render();
    this.renderFilters();
  }

  getTemplate() {
    return `
      <div class="side-bar__wrapper">
        <div class="side-bar__price">
          <div class="title">Price</div>
        </div>
        <div class="side-bar__category">
          <div class="title" data-element="category">Category</div>
        </div>
        <div class="side-bar__brand">
          <div class="title">Brand</div>
        </div>
        <div class="side-bar__rating">
          <div class="title">Rating</div>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  async renderFilters() {
    const categories = await API.loadCategory();

    const filter = new Filter(categories);
    const filterContainer = this.element.querySelector('[data-element="category"]');

    filterContainer.append(filter.element);
  }
}
