import Card from "./card.js";
export default class CardsList {
constructor (data = []) {
  this.data=data;
  this.render();
  this.renderCards();
}
getTeamplate () {
  return `
  <div>
    <div class="card-box" data-element="body">
    <!-- Card list -->
    </div>
  </div>
  `;

}

render () {
  const wrapper = document.createElement ('div');
  wrapper.innerHTML = this.getTeamplate ();

  this.element = wrapper.firstElementChild;
}

renderCards () {
  const cards = this.data.map(item => {
    // console.log(this.data)
    const card = new Card(item);

    return card.element;
  });

  const body = this.element.querySelector('[data-element="body"]');
  body.innerHTML = '';
  body.append(...cards);


  // console.log('cards'. cards);

}
update (data = []) {
  this.data = data;
  this.renderCards();
}

}
