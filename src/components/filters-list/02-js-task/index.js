export default class FiltersList {
  element;

  constructor ({ title = "", list = []} = {}) {
    this.title = title;
    this.list = list;

    this.render();
  }

  renderFilterItem (item) {
    const name = this.title?.toLocaleLowerCase();

    return `
    <li>
        <input class="custom-checkbox"
         type="checkbox"
         name="${name}"
         id="${item.value}"
         value="${item.value}"
         ${item.checked ? "checked" : ""}>
        <label for="${item.value}">${item.title}</label>
    </li>
    `;
  }

  getFilters() {
    return this.list.map(this.renderFilterItem.bind(this)).join("");
  }

  getTemplate() {
    return `
    <h4 class="filters__title">${this.title}</h4>
    <ul class="filters__list">${this.getFilters()}</ul>
    `;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("filters__section");

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }

  remove() {
    if (this.elemnt) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }

  reset() {
    const checkboxes = this.element.querySelectorAll(".custom-checkbox");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

}
