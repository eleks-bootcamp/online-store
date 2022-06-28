export default class Card {
  constructor(someProduct){
  this.state=someProduct;
  //вызов myRender()
  this.myRender();
  }

  //метод getTemplate позволяющий вернуть шаблон т.е. сдесь вписываются элементы. Сюда вставить свою верстку карточки
  // сюда скопировали с файла HTML всю нижеследуюшюю часть
  getTemplate () {
    const result= `
      <div class="blok-rama">
        <div class="blok-img"><img class="otstup" src="${this.state.images[0]}""></div>

        <div class="blok-zv-cn">
        <div class="blok-zvezda">
        <div class="corect1">${this.state.rating}</div>
        <div class="corect1"><i class="bi bi-star"></i></div>

        </div>
        <div class="blok-cena">${this.state.price}</div>
        </div>

        <div class="blok-naz">
        <div class="corect3">${this.state.title}</div>
        </div>

        <div class="typ">
        <div class="corect4">${this.state.category}</div>
        </div>

        <div class="blok-add knop">
        <div class="corect5">Add To Cart</div>
        </div>
      </div>
        `;
    return result;
    }

      // создадим метод который будет менять состояние
  update(data={}){
    this.state = data;
    //необходимо наполлнить новыми данными то что раньше было в карточке
    this.componentElement.innerHTML = this.getTemplate();
  }

  //ниже идет логика конструирования
  myRender (){
    const wrapper = document.createElement('div'); //создали элемент div
    //наполняем элемент div какимито данными
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }

}
