'use strict'

import Filter from "../../filters-list/02-js-task/filters-list.js";
import { BACKEND_URL } from "../../../index.js";
import { API } from "../../../API/api.js";

export default class SideBar {
  constructor () {
    this.categoriesUrl = new URL('categories', BACKEND_URL);

    this.render();
    this.renderFilters();
    this.addEventListener();
  }

  getTeamplate () {
    return `
      <div class="side-bar__wrapper">
        <div class="side-bar__price">
          <h3 class="side-bar__title">Price</h3>
        </div>
        <div class="side-bar__category" data-element="category">
          <h3 class="side-bar__title category">Category</h3>
          <div class="filters-list" data-element="categoryFilters"></div>
        </div>
        <hr>
        <div class="side-bar__brand">
          <h3 class="side-bar__title">Brand</h3>
          <div class="filters-list" data-element="brand"></div>
        </div>
        <hr>
        <div class="side-bar__rating">
          <h3 class="side-bar__title">Rating</h3>
        </div>
      </div>

    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }

  async renderFilters () {
    const categories = await API.loadCategories(this.categoriesUrl);
    const filterContainer = this.element.querySelector('[data-element="categoryFilters"]');
    categories.map(item => {
      const category = new Filter(item);
      filterContainer.append(category.element);
    });
  }

  addEventListener () {
    const categoriesWrapper = this.element.querySelector('[data-element="category"]');

    categoriesWrapper.addEventListener('click', event => {
      if (event.target.type === 'checkbox') {
        const allCheckboxes = categoriesWrapper.querySelectorAll('input');
        const checkedCheckboxes = [];
        const checkedCheckboxesDataElement = [];

        allCheckboxes.forEach(oneCheckbox => {
          if (oneCheckbox.checked) {
            checkedCheckboxes.push(oneCheckbox);
          }
        });

        checkedCheckboxes.forEach(checkedCheckboxElement => {
          checkedCheckboxesDataElement.push(checkedCheckboxElement.dataset.element);
        });

        this.dispatchEvent(checkedCheckboxesDataElement);
      }
    });
  }

  dispatchEvent (categoryId) {
    const customEvent = new CustomEvent('checkbox-selection', {
      detail: categoryId
    });

    this.element.dispatchEvent(customEvent);
  }
}

