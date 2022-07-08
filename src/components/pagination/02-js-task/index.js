const DATA_ROLE = 'data-role';
const NAV_NEXT = 'nav-next';
const NAV_PREV = 'nav-prev';
const PAGE = 'page';
const DATA_PAGE_NUMBER = 'data-page-number';

export default class Pagination {
  constructor(pagingData, maxVisiblePages = 0) {
    this.pageChangedEvent = new CustomEvent('page-changed');
    this.pagingData = pagingData;
    if (!maxVisiblePages) {
      maxVisiblePages = this.pagingData.totalPages;
    }
    this.maxVisiblePages = maxVisiblePages;
    this.setActivePage(pagingData.currentPage);
  }

  setActivePage(AVal) {
    const ap = this.activePage;
    if (AVal != ap) {
      if (AVal > 0 && AVal <= this.pagingData.totalPages) {
        this.activePage = AVal;
        this.update(this.pagingData);
        if (this.pageChangedEvent) {
          this.pageChangedEvent.currentPage = this.activePage;
          if (this.element) {
            this.element.dispatchEvent(this.pageChangedEvent);
          }
        }
      }
    }
  }

  onClickElement(target) {
    const sRole = target.dataset.role;
    let ap = this.activePage;
    switch (sRole) {
      case NAV_NEXT:
        this.setActivePage(++ap);
        break;
        case NAV_PREV:
          this.setActivePage(--ap);
          break;
        case PAGE:
          this.setActivePage(Number(target.dataset.pageNumber));
          break;
    }
  }

  createElem(classes = [], attributes = {}, txt = '', isClickable = false, useTag = 'div') {
    function onElemClick(thisObj, target) {
      thisObj.onClickElement(target);
    }
    const el = document.createElement(useTag);
    el.pagination = this;
    el.className = ['pagination-elem'].concat(classes).join(' ').trim();
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    el.innerHTML = txt;
    if (isClickable) {
      el.addEventListener('click', function() {onElemClick(el.pagination, el)});
    }
    return el;
  }

  createNavBtn(isPrev) {
    let s = "next";
    let dataRole = NAV_NEXT;
    let bootStrapIconClass = "bi-chevron-right";
    if (Boolean(isPrev)) {
      s = "prev";
      dataRole = NAV_PREV;
      bootStrapIconClass = "bi-chevron-left";
    }
    const attribs = {};
    attribs[DATA_ROLE] = dataRole;
    return this.createElem(["pagination-nav", s], attribs, `<i class = "${bootStrapIconClass}"></i>`, true);
  }

  createPage(pageInd, isActive) {
    let sActiveCls = '';
    let sTag = 'a';
    let bClickable = true;
    if (Boolean(isActive)) {
      sActiveCls = "active";
      sTag = 'div';
      bClickable = false;
    }
    const attribs = {};
    attribs[DATA_ROLE] = PAGE;
    attribs[DATA_PAGE_NUMBER] = pageInd;
    return this.createElem(["pagination-page", sActiveCls], attribs, pageInd, bClickable, sTag);
  }

  createBreak() {
    return this.createElem(["pagination-break"], {}, "...");
  }

  createElements(pagingData) {
    let res = [];

    function isPageActive(pageNum) {
      return (this.activePage === pageNum);
    }
    function isMoreTotalThenVisiblePages() {
      return pagingData.totalPages > this.maxVisiblePages;
    }
    function isFirstBreakNeeded() {
      return isMoreTotalThenVisiblePages.call(this)&&
        (this.activePage > this.maxVisiblePages/2);
    }
    function isSecondBreakNeeded() {
      return isMoreTotalThenVisiblePages.call(this)&&
        ((this.pagingData.totalPages - this.activePage+1) > this.maxVisiblePages/2);
    }
    function addEl(el) {
      if (el)
        res.push(el);
    }

    const iLastPage = pagingData.totalPages;
    let pCount = Math.min(pagingData.totalPages, this.maxVisiblePages);

    if (pCount > 1) {
      addEl(this.createNavBtn(true));
      addEl(this.createPage(1, isPageActive.call(this, 1)));

      if (isFirstBreakNeeded.call(this)) {
        addEl(this.createBreak());
        pCount--;
      }
      if (isSecondBreakNeeded.call(this)) {
        pCount--;
      }

      let startLoopInd = Math.round(this.activePage - this.maxVisiblePages/2);
      if (startLoopInd < 0) {
        startLoopInd = 0;
      }
      if (startLoopInd > iLastPage - pCount) {
        startLoopInd = iLastPage - pCount;
      }

        for (let i = 2 + startLoopInd; i - startLoopInd < pCount; i++) {
        let pageNum = i;
        addEl(this.createPage(pageNum, isPageActive.call(this,i)));
      }

      if (isSecondBreakNeeded.call(this))
        addEl(this.createBreak());

      addEl(this.createPage(iLastPage, isPageActive.call(this, iLastPage)));
      addEl(this.createNavBtn(false));
    }
    return res;
  }

  createPagination(pagingData) {
    const res = document.createElement('nav');
    res.className = "pagination";
    const elements = this.createElements(pagingData);
    for (const el of elements) {
      res.append(el);
    }
    return res;
  }

  update(pagingData = {}) {
    this.pagingData = pagingData;
    if (this.element) {
      const elements = this.createElements(this.pagingData);
      this.element.innerHTML = '';
      this.element.append(...elements);
    } else {
      this.element = this.createPagination(this.pagingData);
    }
  }
}
