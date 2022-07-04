export default class DoubleSlider {
	constructor (data) {
		this.data = data;
		this.render();
	}
  
  getTemplate () {
    const result = `<div>
				<span class="from">${this.data[0]}</span>
				<span class="progress"></span>
				<span class="left-slider"></span>
				<span class="right-slider"></span>
				<span class="to">${this.data[1]}</span>
			</div>
    `;
  
      return result
    }

  render () {
		const wrapper = document.createElement('div');

		wrapper.innerHTML = this.getTemplate();

		this.element = wrapper.firstElementChild;
	}
}
