import { Model } from "./base.js";

export class ProductsModel extends Model {
  get productsCount() {
    return 0;
  }

  async _getProducts(state) {
    return [];
  }
}

class DecoratedProductsModel extends ProductsModel {
  #ownerProductsModel = null;
  constructor (ownerProductsModel = null) {
    super ();
    this.#ownerProductsModel = ownerProductsModel;
  }
}

export class SitePageModel extends Model {
  _currentPage = 1;
  _productsPerPage = 12;
  #productsModel = null;
  #productsModelProducts = null;
  _products = [];
  #filterGroups = [];

  constructor (productsModel = null) {
    super();
    this.#productsModel = productsModel;
  }

  get productsModelProducts() {
    return this.#productsModelProducts;
  }

  set currentPage(value) {
    this._currentPage = value;
    this._getProducts({pageNumber: this._currentPage, productsPerPage: this._productsPerPage})
    .then(products => {this._products = products; this.notify();});
  }

  get currentPage() {
    return _currentPage;
  }

  get totalPages() {
    if (this.#productsModel) {
      const result = Math.ceil(this.#productsModel.productsCount/this.productsPerPage);
      return result;
    }
  }

  get productsPerPage() {
    return this._productsPerPage;
  }

  set productsPerPage(val) {
    this._productsPerPage = val;
  }

  get productsModel() {
    return this.#productsModel;
  }

  get products() {
    return this._products;
  }

  get filterGroups() {
    return this.#filterGroups;
  }

  init() {
    this._getFilterGroups()
    .then(filterGroups => {this.notify()});
  }

  async _getProducts(state) {
    const {pageNumber, productsPerPage} = state;
    if (this.#productsModel) {
      const products = await this.#productsModel._getProducts(state);
      this.#productsModelProducts = products;
      if (products && products.length > this.productsPerPage) {
        return products.slice((pageNumber-1)*productsPerPage, pageNumber*productsPerPage);
      }
      return products;
    }
    return [];
  }

  async _getFilterGroups(state) {
    return [];
  }
}


