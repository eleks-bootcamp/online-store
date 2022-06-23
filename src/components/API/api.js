'use strict';

export const API = {
  async loadProducts (pageNumber, url) {
    url.searchParams.set('_page', pageNumber);

    const response = await fetch(url);
    const products = await response.json();

    return products;
  }
};
