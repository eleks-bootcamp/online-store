import DoubleSlider from "./double-slider.js";
import FilterList from "./filter-list.js";

const BACKEND_URL = 'https://online-store.bootcamp.place/api/'

export default class SideBar {
	constructor () {
		this.url = new URL('products', BACKEND_URL)
		this.products = [];
		this.render();
		this.renderSliders();
		this.addEventListeners()
		this.data = ["laptops", "monitors", "video_cards", "gaming_keyboards", "computer_mouse", "ssd", "sound_cards", "ram"]
		this.dispatchedEvent()
		this.addEventListenersBrands()
		this.dispatchedEventBrands()
	}

	getTemplate () {
		return `
		<div>
			<div class="side-bar" data-element="side-bar">
				<div class="side-component">
					<div class="side-component-name">Price</div>
					<div class="slider" data-element="Price">

					</div>
				</div>

				<div class="side-component">
					<div class="side-component-name">Category</div>
					<div class="filter-list" data-element="Category">
					${this.renderCategories()}
					</div>
				</div>

				<div class="side-component">
					<div class="side-component-name">Brand</div>
					<div class="filter-list" data-element="Brand"></div> 
					${this.renderBrands()}
				</div>

				<div class="side-component-last">
					<div class="side-component-name">Rating</div>
					<div class="slider" data-element="Rating">

					</div>
				</div>
			</div>

			<button class="clear-button">clear all filters</button>
		</div>
		`
	}

	getFilterTemplateCategory (data) {	
		const toCamelCase = (someString = '') => {
			const arr = someString.split('_');
		  
			const transformedArr = arr.map((word, index) => {
			  return word[0].toUpperCase() + word.slice(1).toLowerCase();
			});
		  
			return transformedArr.join(' ');
		  };
		return `
		<div class="filter-checkbox">
			<input type="checkbox" class="variant" name="checkbox-category" value="${data}">
			<label for="${data}">${toCamelCase(data)}</label>
		</div>
		`;
	}

	getFilterTemplateBrand (data) {	
		const toCamelCase = (someString = '') => {
			const arr = someString.split('_');
		  
			const transformedArr = arr.map((word, index) => {
			  return word[0].toUpperCase() + word.slice(1).toLowerCase();
			});
		  
			return transformedArr.join(' ');
		  };
		return `
		<div class="filter-checkbox">
			<input type="checkbox" class="variant" name="checkbox-brand" value="${data}">
			<label for="${data}">${toCamelCase(data)}</label>
		</div>
		`;
	}

	render () {
		const wrapper = document.createElement('div');

		wrapper.innerHTML = this.getTemplate();

		this.element = wrapper.firstElementChild;
	}

	async LoadData () {
    const response = await fetch(this.url)
    const products = await response.json();
	
    return products
  }

	async renderSliders () {

		const products = await this.LoadData()

		let prices = []
		let data = products.map(item => {
			prices.push(parseInt(item.price, 10))

			return prices;
		})
		const maxPrice = Math.max(...prices)
		
		const priceArr = [0, maxPrice]
		const ratingArr = [0, 5]

		const priceSlider = new DoubleSlider(priceArr)
		const ratingSlider = new DoubleSlider(ratingArr)

		const priceQ = this.element.querySelector('[data-element="Price"]')
		priceQ.innerHTML = ''
		priceQ.append(priceSlider.element);

		const ratingQ = this.element.querySelector('[data-element="Rating"]')
		ratingQ.innerHTML = ''
		ratingQ.append(ratingSlider.element);
	}
	
 	renderCategories (data = ["laptops", "monitors", "video_cards", "gaming_keyboards", "computer_mouse", "ssd", "sound_cards", "ram"]) {
		return`
			${data.map((item, index) => {
				this.data = item
				return this.getFilterTemplateCategory(item);
			}).join('')}
		`
	}

	renderBrands (data = ['acer', 'apple', 'asus', 'dell', 'lenovo', 'benq', 'msi', 'gigabyte', 'a4-tech', 'logitech', 'kingston', 'dynamode']) {
		return`
			${data.map((data, index) => {
				return this.getFilterTemplateBrand(data);
			}).join('')}
		`
	}

	addEventListeners () {
		let checkboxes = this.element.querySelectorAll(`[name="checkbox-category"]`);
		let enabledCheckbox = []

		checkboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				enabledCheckbox = 
					Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
					.filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
					.map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
					
				console.log(enabledCheckbox)
				this.dispatchedEvent(enabledCheckbox)
			})
		});
	}

	dispatchedEvent (enabledCheckbox) {
		const customEvent = new CustomEvent('checkbox-change', {
			detail: enabledCheckbox
		})
		console.log(enabledCheckbox)
		this.element.dispatchEvent(customEvent)
	}


	addEventListenersBrands () {
		let checkboxes = this.element.querySelectorAll(`[name="checkbox-brand"]`);
		let enabledBrands = []

		checkboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				enabledBrands = 
					Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
					.filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
					.map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
					
				console.log(enabledBrands)
				this.dispatchedEventBrands(enabledBrands)
			})
		});
	}

	dispatchedEventBrands (enabledBrands) {
		const customEvent = new CustomEvent('checkbox-brand', {
			detail: enabledBrands
		})
		console.log(enabledBrands)
		this.element.dispatchEvent(customEvent)
	}
}