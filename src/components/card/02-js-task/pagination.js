export default class Pagination{
  // указываем колличество страниц, можно изменять их колличество в этом месте
  defaultPagesSize=12;
    // activePageIndex = 0 потому что сдесь речь идет о индексах, начинающихся с нуля
  constructor({activePageIndex = 0} = {}) {
    this.activePageIndex=activePageIndex;
    this.render();

    // реализуем обработку действий для обработки на клики на кнопки pagination
    // вызывается обязательно после метода render
    // проработчик действий это реакция пользователя на элемент (т.е. клик на кнопку пользователем)
    this.addEventListeners();
  }

  getTemplate () {
    return `
    <main>
      <div class="osnova">
        <nav class="ramka">

          <a href="#" class="krug krug-left" data-element="nav-prev">
          <i class="bi bi-chevron-left"></i>
          </a>
          ${this.getPages()}
          <a href="#" class="krug krug-right" data-element="nav-next">
          <i class="bi bi-chevron-right"></i>
          </a>
        </nav>
      </div>
    </main>
    `;
  }

      // getPages динамичиски строит страницы
  getPages(){
    // создадим итерацию по массиву и применем join для удаления разделителя запятой из строчки
    return `
      <ul class="page-list non-styles" data-element="pagination">
        ${new Array(this.defaultPagesSize).fill(1).map((item, index)=>{
          return this.getPageTeamlate(index);
        }).join("")}
      </ul>
    `;
  }

  // сделаем динамичискую генерацию чисел страниц
  getPageTeamlate(pageIndex = 0) {

    // переменная определяющая активную кнопку на пагинэйшин
    // знак ? это если истина, знак : если ложь
    const isActive = (pageIndex === this.activePageIndex ? 'active' : "");
    // создадим шаблон и зададим в массив какието даннаые для итерации (в нашем случае 1)
    // если pageIndex равняется activePageIndex то включаем каласс 'active' иначе вернем пустую строчку ""

    return ` <li>
      <a href="#" data-element="page-link"
        class="krug non-styles ${isActive}"
        data-page-index="${pageIndex}">
        ${pageIndex +1}
      </a>
    </li>`
  }

      // setPage вставляет класс active в нужную страницу и реализует проверку. Это главнвый метод для всех
  setPage(pageIndex = 0) {
      //добавим условия при поиске элемента
    //если выбранный элемент уже активен то не нужно выполянть
    if(pageIndex ===this.activePageIndex) return;
    //если выбранный элемент выходит за пределы сушествуюшего списка то теже не выполянть
    if(pageIndex > this.defaultPagesSize - 1 || pageIndex < 0) return;

      // ишим поточную активную страницу соответствующюю pageIndex, т.е. элемент у которого одновременно есть классы .krug.active
    const activePage=this.element.querySelector(".krug.non-styles.active");

      // необходимо на найденом элементе удалить каласс active и все страницу остануться без активного класса
      // classList.remove удаляет класс "active" из activePage
    if(activePage){
      activePage.classList.remove("active");
    }
      // найдем элемент и добавим на него класс active (`[data-page-index="${pageIndex}"]`)
    const nextActivePage= this.element.querySelector(`[data-page-index="${pageIndex}"]`);


      // classList.add добавляет класс "active" в nextActivePage
    if(nextActivePage) {
      nextActivePage.classList.add("active");
    }
    //обновляем activePageIndex
    this.activePageIndex = pageIndex;
  }

  // следуюшая страница, находит текущюю активную страницу и переносит с него класс active на необходумую страничку
  nextPage() {

    const nextPageIndex = this.activePageIndex + 1;
    // используем готовую логику из setPage
    this.setPage(nextPageIndex);
  }


  // предудушая страница
  prevPage() {

    const prevPageIndex = this.activePageIndex - 1;
    // используем готовую логику из setPage
    this.setPage(prevPageIndex);
  }

  render(){
    const wrapper = document.createElement('div'); //создали элемент div

    //наполняем элемент div какимито данными
    wrapper.innerHTML=this.getTemplate();
    this.element=wrapper;
    }

    // проработку действий реализуем в этом методе addEventListeners
    //его вставляем в левую стрелку, правую стрелку и центральные кнопки Pagination
    // добавим три действия: prevPage, nextPage, и третье действие на все страницы
    addEventListeners() {

      // поиск элемента "nav-prev"
      const prevPageBtn = this.element.querySelector(`[data-element="nav-prev"]`)
      // поиск элемента "nav-next"
      const nextPageBtn = this.element.querySelector(`[data-element="nav-next"]`)
      // поиск центральных кнопок "pagination"
      const pagesList = this.element.querySelector(`[data-element="pagination"]`)

      prevPageBtn.addEventListener ('click', event=>{
        this.prevPage();
      });

      nextPageBtn.addEventListener ('click', event=>{
        this.nextPage();
      });

      //необходимо взыть pageIndex со страницы по которой клацнули мышкой
      // проверяем попал ли мышкой но нужному элементу event.target
      // closest() проверяет нахожусь ли я в середине элемента ('.krug.non-styles') котоорый будет искаться за соответсвующим селектором
      // closest() ишет элемент с верху в низ
      pagesList.addEventListener ('click', event=>{
        const pageItem = event.target.closest('.krug.non-styles');

        // если не попал в нужный элемент то останавливаем
        if (pageItem === null) return;

        // узнаем индекс элемента который мы нашли из data-page-index метода getPageTeamlate
        const pageIndex = pageItem.dataset.pageIndex;

          // parseInt приводит строчку к числу
        this.setPage (parseInt(pageIndex, 10) );
      });

    }

}
