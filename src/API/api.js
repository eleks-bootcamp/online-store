'use strict';

export const API = {
  async loadProducts ( url) {
    const response = await fetch(url);
    const products = await response.json();

    return products;
  },

  async loadCategories (url) {
    const response = await fetch(url);
    const categories = await response.json();

    return categories;
  }
};
