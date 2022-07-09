export default class Brand {
    constructor () {
        this.render();
    }
    getTemplate () {
        const result = `
        <div class="filters-item">
            <div class="form-checkbox-item">
                <input type="checkbox" id="category-monitors">
                <label for="category-monitors">Monitors</label>
            </div>
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