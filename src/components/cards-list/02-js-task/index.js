export default class CardsList {
  element;

  constructor({ data = [], Component = {} }) {
    this.data = data;
    this.Component = Component;

    this.render();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("grid");

    this.data
      .map((item) => new this.Component(item).element)
      .forEach((el) => {
        wrapper.append(el);
      });

    this.element = wrapper;
  }

  update(data) {
    this.data = data;

    this.destroy();
    this.render();
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
