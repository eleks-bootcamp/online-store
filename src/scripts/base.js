export const BASE_BAKEND_URL = 'https://online-store.bootcamp.place/api/';

export class BackendJsonDataLoader {
  #data = null;
  #lastRequestUrl = '';
  #url = '';
  #response = null;

  get url() {
    return this.#url;
  }

  set url(val) {
    this.#url = val;
  }

  get response() {
    return this.#response;
  }

  async #requestdata() {
    const response = await fetch(this.#url);
    this.#response = response;

    if (response.ok) {
      this.#data = await response.json();
      this.#lastRequestUrl = this.#url;
    } else {
      alert("Помилка запиту: " + response.status);
    }
  }

  async getData() {
    if (!this.#data || (this.#lastRequestUrl != this.#url)) {
      await this.#requestdata();
    }
    return this.#data;
  }
}

export class Model {
  observers = [];

  #checkObserver(observer) {
    function isValid(observer) {
      return (observer)&&((typeof observer['update']) === "function");
    }
    function throwInvalidObserver() {
      throw 'The observer must be an object that implements "update()" method!';
    }
    if (!isValid(observer)) {
      throwInvalidObserver();
    }
  }

  attach(observer) {
    this.#checkObserver(observer);
    this.observers.push(observer);
  }

  dettach(observer) {
    this.#checkObserver(observer);
    const ind = this.observers.indexOf(observer);
    if (ind >= 0) {
      this.observers.splice(ind, 1);
    }
  }

  notify() {
    for (const observer of this.observers) {
      console.log('Notifying observer to update. Observer:', observer);
      observer.update(this);
    }
  }
}

