//import StaticProductsModel from './static-products-model.js';
//import
export default class SitePageController {

  constructor (model, view) {
    this.model = model;
    this.view = view;
//    view.controller
    this.model.attach(view);
    this.init();
  }

  setPage(pageNumber) {
    this.model.currentPage = pageNumber;
  }

  init() {
    this.model.init();
  }
}
