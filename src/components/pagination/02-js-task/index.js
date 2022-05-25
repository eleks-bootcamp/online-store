const DATA_ROLE = 'data-role';
const NAV_NEXT = 'nav-next';
const NAV_PREV = 'nav-prev';
const PAGE = 'page';
const DATA_PAGE_NUMBER = 'data-page-number';

export default class Pagination {
  constructor(pagingData, maxVisiblePages = 0) {
    this.pageChangedEvent = new CustomEvent('page-changed');
    this.pagingData = pagingData;
    this.maxVisiblePages = maxVisiblePages;
    this.setActivePage(pagingData.currentPage);
  }

  setActivePage(AVal) {
    const ap = this.activePage;
    if (AVal != ap) {
      if (AVal > 0 && AVal <= this.pagingData.totalPages) {
        this.activePage = AVal;
        this.refresh();
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
    let maxPages = this.maxVisiblePages;
    if (maxPages < 1) maxPages = pagingData.totalPages;

    const pCount = Math.min(pagingData.totalPages, maxPages+1);
    let brakePageInd = maxPages;
    if (brakePageInd == 1) brakePageInd = 2;

    if (pCount > 1) {
      res.push(this.createNavBtn(true));
      for (let i = 1; i <= pCount; i++) {
        if ((i === brakePageInd)&&(i != pCount)) {
          res.push(this.createBreak());
        } else {
          let pageNum = i;
          if (i === pCount) {
            pageNum = pagingData.totalPages;
          }
          res.push(this.createPage(pageNum, (this.activePage === i)));
        }
      }
      res.push(this.createNavBtn(false));
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
  refresh() {
    if (this.element) {
      const elements = this.createElements(this.pagingData);
      for (const [ind, el] of this.element.childNodes.entries()) {
        this.element.replaceChild(elements[ind], el);
      }
    } else {
      this.element = this.createPagination(this.pagingData);
    }
  }
}
