'use strict';

export default class DoubleSlider {
  constructor() {
    this.renderPriceSlider();
    this.renderRatingSlider();
  }

  getTeamplatePriceSlider () {
    return `
      <div class="slider__track"></div>
      <input type="range" min="0" max="85000" value="0" class="slider__thumb slider-1" data-element="priceInput-1">
      <input type="range" min="0" max="85000" value="85000" class="slider__thumb slider__thumb_right slider-2" data-element="priceInput-2">
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
      <input type="range" min="0" max="5" value="0" step="0.01" class="slider__thumb slider-1" data-element="ratingInput-1">
      <input type="range" min="0" max="5" value="5" step="0.01" class="slider__thumb slider__thumb_right slider-2" data-element="ratingInput-2">
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

    const slideOne = () => {
      if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap) {
        sliderOne.value = parseFloat(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();

      if (sliderOne.dataset.element === 'priceInput-1') {
        this.dispatchLowerPriceEvent(sliderOne.value);
      }

      if (sliderOne.dataset.element === 'ratingInput-1') {
        this.dispatchLowerRatingEvent(sliderOne.value);
      }
    }

    const slideTwo = () => {
      if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap) {
        sliderTwo.value = parseFloat(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();

      if (sliderTwo.dataset.element === 'priceInput-2') {
        this.dispatchHigherPriceEvent(sliderTwo.value);
      }

      if (sliderTwo.dataset.element === 'ratingInput-2') {
        this.dispatchHigherRatingEvent(sliderTwo.value);
      }
    }

    sliderOne.addEventListener('input', slideOne);
    sliderTwo.addEventListener('input', slideTwo);

    let displayValOne = parentElement.getElementsByClassName('range-1')[0];
    let displayValTwo = parentElement.getElementsByClassName('range-2')[0];
    let minGap = 0;
    let sliderTrack = parentElement.querySelector('.slider__track');
    let sliderMaxValue = parentElement.getElementsByClassName('slider-1')[0].max;

    function fillColor() {
      let percent1 = (sliderOne.value / sliderMaxValue) * 100;
      let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #c8c2f3 ${percent1}%, #7E72F2 ${percent1}%, #7E72F2 ${percent2}%, #c8c2f3 ${percent2}%)`;
    }

    slideOne();
    slideTwo();
  }

  dispatchLowerPriceEvent (value) {
    const customEvent = new CustomEvent('lowerPrice-selection', {
      detail: value
    });

    document.dispatchEvent(customEvent);
  }

  dispatchHigherPriceEvent (value) {
    const customEvent = new CustomEvent('higherPrice-selection', {
      detail: value
    });

    document.dispatchEvent(customEvent);
  }

  dispatchLowerRatingEvent (value) {
    const customEvent = new CustomEvent('lowerRating-selection', {
      detail: value
    });

    document.dispatchEvent(customEvent);
  }

  dispatchHigherRatingEvent (value) {
    const customEvent = new CustomEvent('higherRating-selection', {
      detail: value
    });

    document.dispatchEvent(customEvent);
  }
}
