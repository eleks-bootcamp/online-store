"use strict";

import Filter from "../filters-list/filters-list.js";
import { BACKEND_URL } from "../../index.js";
import { API } from "../API/api.js";

export default class SideBar {
  constructor() {
    this.categoriesUrl = new URL('categories', BACKEND_URL);

    this.render();
    this.renderFilters();
    this.addEventListener();
  }

  getTemplate() {
    return `
      <div class="side-bar__wrapper">
        <div class="side-bar__price">
          <div class="title">Price</div>
        </div>
        <div class="side-bar__category" data-element="category">
          <div class="title">Category</div>
          <div class="filters-list" data-element="categoryFilters"></div>
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

    this.element = element;
  }

  async renderFilters() {
    const categories = await API.loadCategories(this.categoriesUrl);
    const filterContainer = this.element.querySelector('[data-element="categoryFilters"]');
    categories.map(item => {
      const category = new Filter(item);

      filterContainer.append(category.element);
    });
  }

  addEventListener() {
    const category = this.element.querySelector('[data-element="category"]');

    category.addEventListener('click', e => {
      const categoryFilter = e.target.closest('.filter input');

      if(!categoryFilter) return;

      const categoryID = categoryFilter.id;

      this.dispatchEvent(categoryID);
    });
  }

  dispatchEvent(categoryID) {
    const customEvent = new CustomEvent('checkbox-selection', {
      detail: categoryID
    });

    this.element.dispatchEvent(customEvent);
  }
}
