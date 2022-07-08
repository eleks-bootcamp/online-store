import { ProductsModel } from "./site-page-model.js";
import {BackendJsonDataLoader, BASE_BAKEND_URL} from "./base.js";


export class BackendProductsModel extends ProductsModel {
  #loader = new BackendJsonDataLoader();
  #products = null;
  #productsCount = 0;

  get loader() {
    return this.#loader;
  }

  get products() {
    return this.#products;
  }

  get productsCount() {
    return this.#productsCount;
  }

  _generateURL(state) {
    return BASE_BAKEND_URL;
  }

  _getProductsCount(state) {
    return 0;
  }

  async _getProducts(state) {
    const url = this._generateURL(state);
    this.#loader.url = url;
    this.#products = await this.#loader.getData();
    this.#productsCount = this._getProductsCount(state);
    return this.#products;
  }
}

export class SingleRequestBackendProductsModel extends BackendProductsModel {
  _generateURL(state) {
    return super._generateURL(state) + 'products?';
  }

  _getProductsCount(state) {
    return this.products ? this.products.length : 0;
  }
 }

 export class PagedBackendProductsModel extends SingleRequestBackendProductsModel {
  _generateURL(state) {
    return super._generateURL(state) + `_page=${state.pageNumber}&_limit=${state.productsPerPage}`;
  }

  _getProductsCount(state) {
    return this.loader.response.headers.get('X-Total-Count');
  }
 }


