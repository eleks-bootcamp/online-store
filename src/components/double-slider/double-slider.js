'use strict';

export default class DoubleSlider {
  constructor() {
    this.renderPriceSlider();
    this.renderRatingSlider();
  }

  getTeamplatePriceSlider () {
    return `
      <div class="slider__track"></div>
      <input type="range" min="0" max="85000" value="0" class="slider__thumb slider-1">
      <input type="range" min="0" max="85000" value="85000" class="slider__thumb slider__thumb_right slider-2">
      <div class="slider__values">
        <div class="slider__price-start">
          <span class="range-1"></span>
          UAH
        </div>
        <div class="slider__price-end">
          <span class="range-2"></span>
          UAH
        </div>
      </div>
    `;
  }

  getTeamplateRatingSlider () {
    return `
      <div class="slider__track"></div>
      <input type="range" min="0" max="5" value="0" step="0.01" class="slider__thumb slider-1">
      <input type="range" min="0" max="5" value="5" step="0.01" class="slider__thumb slider__thumb_right slider-2">
      <div class="slider__values">
        <div class="slider__price-start">
          <span class="range-1"></span>
        </div>
        <div class="slider__price-end">
          <span class="range-2"></span>
        </div>
      </div>
    `;
  }

  renderPriceSlider () {
    const priceElement = document.createElement('div');

    priceElement.innerHTML = this.getTeamplatePriceSlider();

    this.priceElement = priceElement;
  }

  renderRatingSlider () {
    const ratingElement = document.createElement('div');

    ratingElement.innerHTML = this.getTeamplateRatingSlider();

    this.ratingElement = ratingElement;
  }

  renderSlider(wrapperId) {
    const parentElement = document.getElementById(wrapperId);

    let sliderOne = parentElement.getElementsByClassName('slider-1')[0];
    let sliderTwo = parentElement.getElementsByClassName('slider-2')[0];

    sliderOne.addEventListener('input', slideOne);
    sliderTwo.addEventListener('input', slideTwo);

    let displayValOne = parentElement.getElementsByClassName('range-1')[0];
    let displayValTwo = parentElement.getElementsByClassName('range-2')[0];
    let minGap = 0;
    let sliderTrack = parentElement.querySelector('.slider__track');
    let sliderMaxValue = parentElement.getElementsByClassName('slider-1')[0].max;

    function slideOne() {
      if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap) {
        sliderOne.value = parseFloat(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    }

    function slideTwo() {
      if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap) {
        sliderTwo.value = parseFloat(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
    }

    function fillColor() {
      let percent1 = (sliderOne.value / sliderMaxValue) * 100;
      let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #c8c2f3 ${percent1}%, #7E72F2 ${percent1}%, #7E72F2 ${percent2}%, #c8c2f3 ${percent2}%)`;
    }

    slideOne();
    slideTwo();
  }
}
