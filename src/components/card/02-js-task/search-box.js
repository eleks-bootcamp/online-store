export default class SearchBox {
	constructor (data = "") {
		data = data;
		this.render();
	}

	getTemplate () {
		return `
		<div>
	    <div class="search-box">
				<input type="text" class="search" placeholder="Search">
				<i class="bi bi-search icon"></i>
			</div>
		</div>
		`
	}

	render () {
		const wrapper = document.createElement('div');

		wrapper.innerHTML = this.getTemplate();

		this.element = wrapper.firstElementChild;
	}
}

