 export default class Search {
    constructor () {
        this.render();
    }

    getTemplate () {
        const result = `
            <div data-element="search">
                <form action="#" class="form-input-search font-montserrat-400">
                    <input type="text" data-element="search" id="input-search" placeholder="Search">
                    <label for="input-search" class="label-input-search"><i class="bi bi-search"></i></label> 
                 </form>
            </div>
        `;
        return result;
    };

    render () { 
        const section = document.createElement('div');
        section.innerHTML = this.getTemplate();
        this.element = section.firstElementChild;
    };
 }