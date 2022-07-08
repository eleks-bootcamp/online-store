import {StorePage, PageBuilder} from './site-page.js';
import StaticProductsModel from './static-products-model.js';
import {SingleRequestBackendProductsModel, PagedBackendProductsModel} from './backend-products-models.js';
import SitePageController from './site-page-controller.js';
import { SitePageModel } from './site-page-model.js';


const pageBuilder = new PageBuilder();
pageBuilder.init(new StorePage());
pageBuilder.addHeaderSection();
pageBuilder.addLeftPanel();
pageBuilder.addMainPanel();
pageBuilder.addFooterSection();
const mainPage = pageBuilder.getPage();
mainPage.insert(document.body);

//const productsModel = new StaticProductsModel();  //Model with mocked products
//const productsModel = new SingleRequestBackendProductsModel(); //Model that requests all products at once
const productsModel = new PagedBackendProductsModel();  //Requests products for particular page
const siteModel = new SitePageModel(productsModel);

const siteController = new SitePageController(siteModel, mainPage);
mainPage.controller = siteController;
siteController.setPage(1);
