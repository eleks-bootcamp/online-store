export default class DoubleSlider {
  element;
  subElements = {};
  onThumbPointerMove = (event) => event;

  constructor({
    min = 100,
    max = 200,
    formatValue = (value) => value,
    selected = {
      from: min,
      to: max,
    },
    precision = 0,
    filterName = "",
  } = {}) {
    this.min = min;
    this.max = max;
    this.formatValue = formatValue;
    this.selected = selected;
    this.precision = precision;
    this.filterName = filterName;
    this.render();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("range-slider");
    wrapper.innerHTML = this.template;
    this.element = wrapper;

    this.element.ondragstart = () => false;

    this.subElements = this.getSubElements();
    this.initEventListeners();
    // this.update();
  }

  get template() {
    const { from, to } = this.selected;

    return `
      <span data-element="from">${this.formatValue(from)}</span>
      <div class="range-slider__inner" data-element="inner">
        <span class="range-slider__progress" data-element="progress" ></span>
        <span class="range-slider__thumb-left" data-element="thumbLeft" ></span>
        <span class="range-slider__thumb-right" data-element="thumbRight" ></span>
      </div>
      <span data-element="to">${this.formatValue(to)}</span>
    `;
  }

  initEventListeners() {
    const { thumbLeft, thumbRight } = this.subElements;
    thumbLeft.addEventListener("pointerdown", (event) =>
      this.onThumbPointerDown(event)
    );
    thumbRight.addEventListener("pointerdown", (event) =>
      this.onThumbPointerDown(event)
    );
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");

    for (const subElement of elements) {
      const name = subElement.dataset.element;
      result[name] = subElement;
    }

    return result;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    document.removeEventListener("pointermove", this.onThumbPointerMove);
    document.removeEventListener("pointerup", this.onThumbPointerUp);
  }
}
