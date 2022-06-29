"use strict";

export const API = {
  async loadProducts(pageNumber, url) {
    url.searchParams.set('_page', pageNumber);

    const response = await fetch(url);
    const products = await response.json();

    return products;
  },

  async loadCategory() {
    const server = ' https://online-store.bootcamp.place/api/categories';
    const response = await fetch(server);
    const category = await response.json();

    return category;
  }

};
