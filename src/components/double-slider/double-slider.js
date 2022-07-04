'use strict';

window.onload = function() {
  renderSlider('slider-wrapper-1');
  renderSlider('slider-wrapper-2');
};


const renderSlider = (wrapperId) => {
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
};
