export default class Pagination {

	constructor({ activePageIndex = 0, totalPages = 12 } = {}) {
		this.totalPages = totalPages;
		this.activePageIndex = activePageIndex;
		this.render();
		this.addEventListeners();
	}

	getTemplatePage () {
		return `
		<div class="pagination">
			<a href="#" class="pagination-item" data-element="nav-prev">
				<i class="bi bi-chevron-left"></i>
			</a>
			${this.getPages()}
			<a href="#" class="pagination-item" data-element="nav-next">
				<i class="bi bi-chevron-right"></i>
			</a>
		</div>`;
	}

	getPages () {
		return `
			<ul class="pagination-center" data-element="pagination">
				${new Array(this.totalPages).fill(1).map((item, index) => {
					return this.getPageTemplate(index);
				}).join('')}
			</ul>
		`;
	}

	getPageTemplate (pageIndex = 0) {
		const isActive = pageIndex === this.activePageIndex ? 'active' : '';
		
		return `<li>
				<a href="#" data-element="page-link" class="pagination-item ${isActive}" data-page-index="${pageIndex}">
					${pageIndex + 1}
				</a>
		</li>`;
	}

	setPage (pageIndex = 0) {
		if (pageIndex === this.activePageIndex) return;
		if (pageIndex > this.totalPages - 1 || pageIndex < 0) return;

		this.dispatchedEvent(pageIndex);

		const activePage = this.element.querySelector('.pagination-item.active');

		if (activePage) {
			activePage.classList.remove('active');
		}

		const nextActivePage = this.element.querySelector(`[data-page-index="${pageIndex}"]`);

		if (nextActivePage) {
			nextActivePage.classList.add('active');
		}

		this.activePageIndex = pageIndex;
	}

	nextPage () {
		const nextPageIngex = this.activePageIndex + 1;

		this.setPage(nextPageIngex);
	}

	prevPage () {
		const prevPageIndex = this.activePageIndex - 1;

		this.setPage(prevPageIndex);
	}

	render() {
		const wrapper = document.createElement('div');

		wrapper.innerHTML = this.getTemplatePage();

		this.element = wrapper.firstElementChild;
	}

	addEventListeners () {
		const prevPageBtn = this.element.querySelector(`[data-element="nav-prev"]`);
		const nextPageBtn = this.element.querySelector(`[data-element="nav-next"]`);
		const pagesList = this.element.querySelector(`[data-element="pagination"]`);

		prevPageBtn.addEventListener('click', () => {
			this.prevPage();
		});

		nextPageBtn.addEventListener('click', () => {
			this.nextPage();
		});

		pagesList.addEventListener('click', event => {
			const pageItem = event.target.closest('.pagination-item');

			if(!pageItem) return;

			const pageIndex = pageItem.dataset.pageIndex;

			this.setPage(parseInt(pageIndex, 10));
		});
	}

	dispatchedEvent (pageIndex) {
		const customEvent = new CustomEvent('page-changed', {
			detail: pageIndex
		})

		this.element.dispatchEvent(customEvent)
	}
}