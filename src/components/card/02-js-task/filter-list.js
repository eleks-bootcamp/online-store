export default class FilterList {
	constructor (data) {
		this.state = data;
		this.myRender();
		this.addEventListeners()
	}

	getTemplate () {
	const result = `
		<div class="filter-checkbox">
			<input type="checkbox" class="variant" data-element="${this.state}">
			<label for="${this.state}">${this.state}</label>
		</div>
	`;

		return result
	}

	myRender () {
		const element = document.createElement('div');

		element.innerHTML = this.getTemplate();

		this.element = element.firstElementChild;
	}

	addEventListeners () {
		const checkbox = this.element.querySelector(`[data-element="${this.state}"]`);

		checkbox.addEventListener('change', event => {
			const variant = event.target.closest('.filter-checkbox');

			const category = variant.dataset.element;

			this.dispatchedEvent(category)
		});
	}

	dispatchedEvent (category) {
		const customEvent = new CustomEvent('checkbox-change', {
			detail: category
		})
		console.log(customEvent)
		this.element.dispatchEvent(customEvent)
	}
}