export default class ComponentsList {
  #data = [];
  #cssClassName = '';
  #element = null;
  constructor (cssClassName = '') {
    this.#cssClassName = cssClassName;
    this.#render();
  }

  get element() {
    return this.#element;
  }

  _getComponentElement(dataItem)
  {
    return null; //override this method in future classes
  }

  #renderComponents() {
    const data = this.#data;
    let res = '';
    const components = data.map((dataItem, index) => {
      const component = this._getComponentElement(dataItem);
      if (null === component) {
        throw "component shoudn't be null! Override _getCompnentElement!";
      }
      return component;
    });

    this.#element.append(... components);
  }

  #render() {
    this.#element = document.createElement('div');
    this.#element.className = this.#cssClassName;
    this.#renderComponents();

    return this.#element;
  }

  update(data = []) {
    this.#data = data;
    this.#element.innerHTML = '';
    this.#renderComponents();
  }
}
