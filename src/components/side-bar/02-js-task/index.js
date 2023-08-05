export default class SideBar {
    constructor () {
        this.render()
        this.initEventListeners()
        this.showMyFunction()
    }

    getTemplate () {
        return `<div class="checkbox-wrapper">
        <!-- SideBar component -->
        <div class="group-wrapper">
            <h2>Category</h2>
            <label for="monitors" data-element="monitor-filter" class="container">Monitors
              <input type="checkbox" name="monitors" value="yes" id="monitors"  >
              <span class="checkmark" ></span>
            </label>
            <label class="container">Laptops
              <input type="checkbox" class="filter_value" name="laptops">
              <span class="checkmark"></span>
            </label>
            <label class="container">Video cards
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Gaming keyboards
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Computer mouse
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label>
            <label class="container">SSD
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Sound cards
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">RAM
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="group-wrapper">
            <h2>Brands</h2>
            <label class="container">Asus
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label>
            <label class="container">Acer
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Apple
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Dell
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Dynamode
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label>
            <label class="container">Gigabyte
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Kingston
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Lenovo
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">Logitech
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label>
            <label class="container">MSI
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">BenQ
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
            <label class="container">A4Tech
              <input type="checkbox" class="filter_value">
              <span class="checkmark"></span>
            </label>
          </div> 
    
        
      </div>`
    };

    render () {
        const wrapper = document.createElement('div');
        
        wrapper.innerHTML = this.getTemplate();
        
        this.element = wrapper.firstElementChild;
    };

    

    initEventListeners(){
      
       const checkboxes = this.element.querySelector('#monitors');
        checkboxes.addEventListener('click' , () => {
            if(checkboxes.checked == true) {
                console.log(checkboxes.name)
            } else {
                console.log(this.element.name)
            }
        });
    }


    showMyFunction(){
        console.log()
        
    }

    
}
