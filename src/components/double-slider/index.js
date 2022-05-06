window.onload = function() {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range-1');
let displayValTwo = document.getElementById('range-2');
let minGap = 0;
let sliderTrack = document.querySelector('.slider__track');
let sliderMaxValue = document.getElementById('slider-1').max;

function slideOne() {
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}

function slideTwo() {
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}

function fillColor() {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #c8c2f3 ${percent1}%, #7E72F2 ${percent1}%, #7E72F2 ${percent2}%, #c8c2f3 ${percent2}%)`;
}
