export default class SearchBox {

  constructor(){

  this.render();
  }

  getTemplate(){
    return `<div class="Search-box-wrapper">
    <div class="Search-box">
     <input type="text" placeholder="Search" class="Input-text">
     <div class="Search-icon"><i class="bi bi-search"></i></div>
    </div>
   </div>`;
  }
  render(){
    const Search = document.createElement('div');

    Search.innerHTML = this.getTemplate();
    this.element = Search;

  }
}
