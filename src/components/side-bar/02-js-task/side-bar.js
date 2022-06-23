'use strict'

export default class SideBar {
  constructor (data) {
    this.data = data;

    this.render();
  }

  getTeamplate () {
    return `
      <h3 class="form-title">Price</h3>

      <div class="double-slider">
        <i class="double-slider__icon icon-slider-left"></i>

        <div class="double-slider__line"></div>

        <i class="double-slider__icon icon-slider-right"></i>
      </div>
      <div class="double-slider__range">
        <span>0 UAH</span>

        <span>85000 UAH</span>
      </div>

      <h3 class="form-title category">Category</h3>

      <div class="filters-list">
        <label for="check1">
          <div class="filter">
            <input type="checkbox" id="check1" class="check">

            <span>Monitors</span>
          </div>
        </label>

        <label for="check2">
        <div class="filter">
            <input type="checkbox" id="check2" class="check">

            <span>Laptops</span>
          </div>
        </label>

        <label for="check3">
          <div class="filter">
            <input type="checkbox" id="check3" class="check">

            <span>Video cards</span>
          </div>
        </label>

        <label for="check4">
          <div class="filter">
            <input type="checkbox" id="check4" class="check">

            <span>Gaming keyboards</span>
          </div>
        </label>

        <label for="check5">
          <div class="filter">
            <input type="checkbox" id="check5" class="check">

            <span>Computer mouses</span>
          </div>
        </label>

        <label for="check6">
          <div class="filter">
            <input type="checkbox" id="check6" class="check">

            <span>SSD</span>
          </div>
        </label>

        <label for="check7">
          <div class="filter">
            <input type="checkbox" id="check7" class="check">

            <span>Sound cards</span>
          </div>
        </label>

        <label for="check8">
          <div class="filter">
            <input type="checkbox" id="check8" class="check">

            <span>RAM</span>
          </div>
        </label>
      </div>

      <hr>

      <h3 class="form-title">Brand</h3>

      <div class="filters-list">
        <label for="check9">
          <div class="filter">
            <input type="checkbox" id="check9" class="check">

            <span>Asus</span>
          </div>
        </label>

        <label for="check10">
        <div class="filter">
            <input type="checkbox" id="check10" class="check">

            <span>Acer</span>
          </div>
        </label>

        <label for="check11">
          <div class="filter">
            <input type="checkbox" id="check11" class="check">

            <span>Apple</span>
          </div>
        </label>

        <label for="check12">
          <div class="filter">
            <input type="checkbox" id="check12" class="check">

            <span>Dell</span>
          </div>
        </label>

        <label for="check13">
          <div class="filter">
            <input type="checkbox" id="check13" class="check">

            <span>Dynamode</span>
          </div>
        </label>

        <label for="check14">
          <div class="filter">
            <input type="checkbox" id="check14" class="check">

            <span>Gygabyte</span>
          </div>
        </label>

        <label for="check15">
          <div class="filter">
            <input type="checkbox" id="check15" class="check">

            <span>Kingston</span>
          </div>
        </label>

        <label for="check16">
          <div class="filter">
            <input type="checkbox" id="check16" class="check">

            <span>Lenovo</span>
          </div>
        </label>

        <label for="check17">
          <div class="filter">
            <input type="checkbox" id="check17" class="check">

            <span>Logitech</span>
          </div>
        </label>

        <label for="check18">
          <div class="filter">
            <input type="checkbox" id="check18" class="check">

            <span>Msi</span>
          </div>
        </label>

        <label for="check19">
          <div class="filter">
            <input type="checkbox" id="check19" class="check">

            <span>BenQ</span>
          </div>
        </label>

        <label for="check20">
          <div class="filter">
            <input type="checkbox" id="check20" class="check">

            <span>A4Tech</span>
          </div>
        </label>
      </div>

      <hr>

      <h3 class="form-title">Rating</h3>

      <div class="double-slider">
        <i class="double-slider__icon icon-slider-left"></i>

        <div class="double-slider__line"></div>

        <i class="double-slider__icon icon-slider-right"></i>
      </div>
      <div class="double-slider__range">
        <span>0</span>

        <span>5</span>
      </div>
    `;
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = this.getTeamplate();

    this.element = element;
  }
}

/* const sideBar = new SideBar();

const rootElement = document.querySelector('#root');
rootElement.append(sideBar.element); */

