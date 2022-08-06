export default class DoubleSlider {
    constructor(){
        this.render()
        this.slideOne()
        this.slideTwo()
        
    }


    getMyTemplate () {
        return `
        <div class="wrapper">
            <h3>Price</h3>
            <div class="container">
                <div class="slider-track"></div>
                <input type="range" min="0" max="100" value="8"
                 id="slider-1" oninput="slideOne()">

                <input type="range" min="0" max="100" value="99"
                 id="slider-2" oninput="slideTwo()">
            </div>
            <div class="values">
                 <span id="range-1"></span>
                <span id="range-2"></span>
            </div>
        </div>
        `;
    };

    
        

    slideOne(){
        const sliderOne = this.element.querySelector("#slider-1");
        const sliderTwo = this.element.querySelector("#slider-2");
        const displayValueOne = this.element.querySelector("#range-1");
        
        const minGap = 10;


        if(sliderTwo.value - sliderOne.value <= minGap){
        sliderOne.value = sliderTwo.value - minGap;
        }
        displayValueOne.textContent = sliderOne.value + ' UAH';
    };
       
        

   

   
    
    
    slideTwo(){
        const sliderOne = this.element.querySelector("#slider-1");
        const sliderTwo = this.element.querySelector("#slider-2");
        const displayValueOne = this.element.querySelector("#range-1");
        
        const minGap = 0;
        const displayValueTwo = this.element.querySelector("#range-2");

        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap
        };
        displayValueTwo.textContent = sliderTwo.value + ' UAH';
    };

    render () {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getMyTemplate();
        
        this.element = wrapper; 

    };

};
