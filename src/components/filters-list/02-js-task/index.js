const FILTERS_BLK_CSS_CLASS = "filters-panel-filters";
export default class FiltersList {
  #title = '';
  #filters = null;
  #element = null;

  constructor ({title = '', list = null} = {}) {
    this.#title = title;
    this.#filters = list;
  }

  get element() {
    if (!this.#element) {
      this.#element = this.#render();
    }
    return this.#element;
  }

  #render() {
    const tmp = document.createElement('div');
    tmp.innerHTML = this.#getTemplate();
    return tmp.firstElementChild;
  }

  #getTemplate() {
    let sItemsHTML = '';
    for (const filter of this.#filters) {
      sItemsHTML += this.#getItemTemplate(filter);
    }

    return `
            <form class="filters-panel">
              <h3 class="filters-panel-title">${this.#title}</h3>
              <div class=${FILTERS_BLK_CSS_CLASS}>
                ${sItemsHTML}
              </div>
            </form>
            `
  }

  #getItemTemplate({title = '', value = '', checked = false} = {}) {
    const sChecked = checked ? ' checked' : '';
    const result = `
                    <div class="filters-panel-item">
                      <label for="${value}">${title}</label>
                      <input id="${value}" type="checkbox" name="filter" value="${value}"${sChecked}></input>
                    </div>
                    `

    return result;
  }

  #getFiltersWrapper() {
    const result = this.element ? this.element.querySelector(`.${FILTERS_BLK_CSS_CLASS}`) : null;

    return result;
  }

  reset() {
    const filtersWrapper = this.#getFiltersWrapper();
    if (!filtersWrapper) return;

    const checkboxes = filtersWrapper.querySelectorAll('[type = checkbox]');
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
}
