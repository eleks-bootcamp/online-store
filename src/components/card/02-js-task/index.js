export default class Card {

  constructor(productInfo) {
    this.productInfo = productInfo;
    this.width = 317;
    this.useScale = false;
    this.scaleFont = false;
    const sCardHTML = this.generateHTML(this.width, this.productInfo.id, this.productInfo.images[0], this.productInfo.rating,
      this.productInfo.price, this.productInfo.title, this.productInfo.category, this.useScale, this.scaleFont);
    let tmpEl = document.createElement('div');
    tmpEl.innerHTML = sCardHTML.trim();
    this.element = tmpEl.firstChild;
  }

  createStarIcon(width, height)
  {
    const r = this.productInfo.rating;
    const f4_5 = 4.5;
    let clsName = "bi bi-star";
    if ((r >= 1)&&(r < f4_5)) {
      clsName = "bi bi-star-half";
    } else if (r >= f4_5) {
      clsName = "bi bi-star-fill";
    }

    let el = document.createElement('i');
    el.className = clsName;
    el.style.cssText = `width: ${width}px; height: ${height}px`;
    return el.outerHTML;
  }

  generateHTML(width, productId, imgURL, rating, price, productName, productCategory, useScale = false, scaleFont = false)
  {
    const refCardWidth = 317;
    const refCardHeight = 394;
    const refImgMargins = 12;
    const refImgWidth = 293;
    const refImgHeight = 200;
    const refAddToCardBtnHeight = 40;
    const refStarsBlkWidth = 70;
    const refStarsBlkHeight = 27;
    const refCardBaseFontSize = 15;
    const refStarIconWidth = 14;
    const refStarIconHeight = 13;

    let scale = 1;
    if (useScale) {
      scale = width/refCardWidth;
    }

    const cardHeight = scale*refCardHeight;
    const imgMargins = scale*refImgMargins;
    const imgWidth = scale*refImgWidth;
    const imgHeight = scale*refImgHeight;
    const addToCardBtnHeight = scale*refAddToCardBtnHeight;
    const descrBlkHeight = cardHeight - (2*imgMargins + imgHeight + addToCardBtnHeight);
    const starsBlkWidth = scale*refStarsBlkWidth;
    const starsBlkHeight = scale*refStarsBlkHeight;

    let cardBaseFontSize = refCardBaseFontSize;
    if (scaleFont) {
      cardBaseFontSize = scale*refCardBaseFontSize;
    }

    const starIconWidth = scale*refStarIconWidth;
    const starIconHeight = scale*refStarIconHeight;
    const card = `
      <div class="card" id="${productId}" style="font-size: ${cardBaseFontSize}px; width: ${width}px; height: ${cardHeight}px;">
        <img src="${imgURL}" class="card-product-photo" style="width: ${imgWidth}px; height: ${imgHeight}px; margin: ${imgMargins}px"/>
        <div class="card-description-block" style="width: 90%; height: ${descrBlkHeight}px">
          <div class="card-stars-block" style="width: ${starsBlkWidth}px; height: ${starsBlkHeight}px">
            <span>${rating}</span>
            <span>${this.createStarIcon(starIconWidth, starIconHeight)}</span>
          </div>
          <span class="card-product-price">${price}</span>
          <span class="card-product-name">${productName}</span>
          <span class="card-product-category">${productCategory}</span>
        </div>
        <div class="card-btn-add-to-cart" style="width: 100%; height: ${addToCardBtnHeight}px">
          <span>Add to card</span>
        </div>
      </div>
    `
    return card;
  }
}
