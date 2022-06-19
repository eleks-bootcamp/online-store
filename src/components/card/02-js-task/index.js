  import CardsList from './cards-list.js'
  import Pagination from "./pagination.js";

  //const card = new Card(product);
  //const pagination = new Pagination({activePageIndex:2});

  const BACKEND_URL='https://online-store.bootcamp.place/api/';

export default class OnlineStorePage {
  constructor (products) {
    this.pagesSize=10;
    this.url = new URL('products', BACKEND_URL);
    this.products=[];

    this.url.searchParams.set('_limit', this.pagesSize)
    this.components={};
    this.initComponents()

    this.render()
    this.renderComponents()
    this.initEventListeners()
    this.update(1);
  }
 async loadData(pageNumber){
    this.url.searchParams.set('_page', pageNumber)
   const response = await fetch(this.url)
      const products= await response.json();
   console.log('products', products)
   return products;
  }

  getTemplate () {
    return `
      <div>
        <div data-element="cardsList">
        <!-- Card Component -->
</div>
        <div data-element="pagination">
        <!-- -->
</div>
      </div>
    `;
  }

  initComponents(){

    //const totalPages=Math.ceil(this.products.length / this.pagesSize)
    const totalPages=12;
    const cardsList = new CardsList(this.products.slice(0, this.pagesSize));
    const pagination = new Pagination({activePageIndex:2}, totalPages)
    this.components.cardsList=cardsList;
    this.components.pagination=pagination;

  }




  renderComponents(){
    const cardsListContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]')
    cardsListContainer.append(this.components.cardsList.element)
    paginationContainer.append(this.components.pagination.element)
  }
  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
  initEventListeners() {
    this.components.pagination.element.addEventListener('page-changer', event => {
      const pageIndex = event.detail;
      this.update(pageIndex+1);
    });
  }
  async update(pageNumber){
    //const start = pageIndex * this.pagesSize;
    //const end = start + this.pagesSize;
    //this.components.cardsList.update(this.products.slice(start, end));
    const data= await this.loadData(pageNumber);

    this.components.cardsList.update(data);
  }
}




