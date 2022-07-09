"use strict";

import Filter from "../filters-list/filters-list.js";
import DoubleSlider from "../double-slider/double-slider.js";
import { BACKEND_URL } from "../../index.js";
import { API } from "../../API/api.js";

export default class SideBar {
  constructor() {
    this.categoriesUrl = new URL('categories', BACKEND_URL);
    this.brandsUrl = new URL('brands', BACKEND_URL);

    this.render();
    this.renderFilters();
    this.renderDoubleSliders();
    this.addEventListeners();
  }

  getTemplate() {
    return `
      <div class="side-bar__wrapper">
        <div class="side-bar__price">
          <div class="title">Price</div>
          <div id="slider-wrapper-1" class="slider" data-element="slider-1"></div>
        </div>
        <div class="side-bar__category" data-element="categories">
          <div class="title">Category</div>
          <div class="filters-list" data-element="categoryFilters"></div>
        </div>
        <div class="side-bar__brand" data-element="brands">
          <div class="title">Brand</div>
          <div class="filters-list" data-element="brandFilters"></div>
        </div>
        <div class="side-bar__rating">
          <div class="title">Rating</div>
          <div id="slider-wrapper-2" class="slider" data-element="slider-2"></div>
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
    const categoriesContainer = this.element.querySelector('[data-element="categoryFilters"]');
    categories.map(item => {
      const category = new Filter(item);

      categoriesContainer.append(category.element);
    });

    const brands = await API.loadBrands(this.brandsUrl);
    const brandsContainer = this.element.querySelector('[data-element="brandFilters"]');
    brands.map(item => {
      const brand = new Filter(item);

      brandsContainer.append(brand.element);
    });
  }

  renderDoubleSliders() {
    const doubleSlider = new DoubleSlider();

    const priceSliderContainer = this.element.querySelector('[data-element="slider-1"]');
    priceSliderContainer.append(doubleSlider.priceElement);

    const ratingSliderContainer = this.element.querySelector('[data-element="slider-2"]');
    ratingSliderContainer.append(doubleSlider.ratingElement);

    window.onload = function() {
      doubleSlider.renderSlider('slider-wrapper-1');
      doubleSlider.renderSlider('slider-wrapper-2');
    };
  }

  addEventListeners() {
    const categoriesWrapper = this.element.querySelector('[data-element="categories"]');

    categoriesWrapper.addEventListener('click', e => {
      if (e.target.type === 'checkbox') {
        const allCategoryCheckboxes = categoriesWrapper.querySelectorAll('input');
        const checkedCategoryCheckboxes = [];
        const checkedCategoryCheckboxesDataElement = [];

        allCategoryCheckboxes.forEach(oneCheckbox => {
          if (oneCheckbox.checked) {
            checkedCategoryCheckboxes.push(oneCheckbox);
          }
        });

        checkedCategoryCheckboxes.forEach(checkedCheckboxElement => {
          checkedCategoryCheckboxesDataElement.push(checkedCheckboxElement.dataset.element);
        });

        this.dispatchCategoriesEvent(checkedCategoryCheckboxesDataElement);
      }
    });

    const brandsWrapper = this.element.querySelector('[data-element="brands"]');

    brandsWrapper.addEventListener('click', e => {
      if (e.target.type === 'checkbox') {
        const allBrandCheckboxes = brandsWrapper.querySelectorAll('input');
        const checkedBrandCheckboxes = [];
        const checkedBrandCheckboxesDataElement = [];

        allBrandCheckboxes.forEach(oneCheckbox => {
          if (oneCheckbox.checked) {
            checkedBrandCheckboxes.push(oneCheckbox);
          }
        });

        checkedBrandCheckboxes.forEach(checkedCheckboxElement => {
          checkedBrandCheckboxesDataElement.push(checkedCheckboxElement.dataset.element);
        });

        this.dispatchBrandsEvent(checkedBrandCheckboxesDataElement);
      }
    });
  }

  dispatchCategoriesEvent(dataElement) {
    const customEvent = new CustomEvent('categories-selection', {
      detail: dataElement
    });

    this.element.dispatchEvent(customEvent);
  }

  dispatchBrandsEvent(dataElement) {
    const customEvent = new CustomEvent('brands-selection', {
      detail: dataElement
    });

    this.element.dispatchEvent(customEvent);
  }
}
