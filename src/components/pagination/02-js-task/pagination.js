export default class Pagination {
  constructor () {
  // defaultPagesSize=12;
    this.render();

  }

  getTemplate() {
    return `
    <div class="pagination" >
    <div class="page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </div>

    <div class="page">1</div>
    <div class="page">2</div>
    <div class="page">3</div>
    <div class="page">4</div>
    <div class="page">5</div>
    <div class="page">6</div>
    <div class="page">7</div>
    <div class="page">8</div>
    <div class="page">9</div>
    <div class="page">10</div>
    <div class="page">11</div>
    <div class="page">12</div>

    <div class="page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
  </div>
    `;
  }

  /*getPages () {
    return `

    `;
  }*/

 // getPageSize

  render () {
    const wraper=document.createElement('div');
    wraper.innerHTML=this.getTemplate();
    this.element = wraper;
  }


}
