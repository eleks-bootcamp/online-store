class PaginationModel {
  constructor () {
    this.pageCount = 0;
    this.activePage = 1;
  }
}

class PaginationView {
  constructor(maxVisiblePages=0) {
    this.maxVisiblePages = maxVisiblePages;
  }
  createElem(classes = [], id = "", txt = "") {
    var classesStr = "pagination-elem";
    var idStr = "" + id;
    classes.forEach(el => {
      classesStr += " " + el;
    })
    classesStr = classesStr.trim();
    if (classesStr != "") {
      classesStr = `class = "${classesStr}"`;
    }
    idStr = idStr.trim();
    if (idStr != "") {
      idStr = "id=" + idStr;
    }
    return `<div ${classesStr} ${idStr}>${txt}</div>`
  }

  createNavBtn(isPrev) {
    var s = "next";
    var bootStrapIconClass = "bi-chevron-right";
    if (Boolean(isPrev)) {
      s = "prev";
      bootStrapIconClass = "bi-chevron-left";
    }
    return this.createElem(["pagination-nav", s], "", `<i class = "${bootStrapIconClass}"></i>`);
  }

  createPage(pageInd, isActive) {
    var sActiveCls = "";
    if (Boolean(isActive)) sActiveCls = "active";

    return this.createElem(["pagination-page", sActiveCls], pageInd, pageInd);
  }

  createBreak() {
    return this.createElem(["pagination-break"], "", "...");
  }

  createElements(pagingModel) {
    var res = "";
    var maxPages = this.maxVisiblePages;
    if (maxPages < 1) maxPages = pagingModel.pageCount;

    const pCount = Math.min(pagingModel.pageCount, maxPages+1);
    var brakePageInd = maxPages;
    if (brakePageInd == 1) brakePageInd = 2;

    if (pCount > 1) {
      res += this.createNavBtn(true);
      for (var i = 1; i <= pCount; i++) {
        if ((i == brakePageInd)&&(i != pCount)) {
          res += this.createBreak();
        } else {
          var pageNum = i;
          if (i == pCount) {
            pageNum = pagingModel.pageCount;
          }
          res += this.createPage(pageNum, (pagingModel.activePage == i));
        }
      }
      res += this.createNavBtn(false);
    }
    return res;
  }
  createPagination(pagingModel) {
    const res = `<div class="pagination">${this.createElements(pagingModel)}</div>`;
    return res;
  }
}

/*
I ommited Controller class creation for now, because there is
not much interaction yet.
*/
const pModel = new PaginationModel()
pModel.pageCount = 20;
const pView = new PaginationView(10);
const str = pView.createPagination(pModel);
console.log(str);
document.querySelector(".wrapper").innerHTML = str;
