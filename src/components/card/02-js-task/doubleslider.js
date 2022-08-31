export default class DoubleSlider {
    constructor () {
        this.render();
    }
    getTemplate () {
        const result = `
    
            <div class="slider-wrapper">
                <span class="min-limit">0 UAH</span>
                <div class="range-slider-inner">
                    <span class="range-slider-left"></span>
                    <span class="range-slider-space"></span>
                    <span class="range-slider-right"></span>
                </div>
                <span class="max-limit">100 000 UAH</span>
            </div>      
        `;
        return result;
    };

    render () { 
        const element = document.createElement('div');
        element.innerHTML = this.getTemplate();
        this.element = element.firstElementChild;
    }
}