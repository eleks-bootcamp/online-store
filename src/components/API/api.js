"use strict";

export const API = {
  async loadProducts(pageNumber, url) {
    url.searchParams.set('_page', pageNumber);

    const response = await fetch(url);
    const products = await response.json();

    return products;
  },

  async loadProductsCategory(category, url) {
    url.searchParams.set('category', category);

    const response = await fetch(url);
    const products = await response.json();

    return products;
  },

  async loadCategories(url) {
    const response = await fetch(url);
    const categories = await response.json();

    return categories;
  }
};
