const products =
[
  {"Id": "Laptop1", "stars": 2.34, "price": 15999, "description": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black", "category": "Laptops"},
  {"Id": "Laptop2", "stars": 1.34, "price": 28999, "description": "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!", "category": "Laptops"},
  {"Id": "Laptop3", "stars": 4.45, "price": 33999, "description": 'Ноутбук Apple MacBook Air 13" M1 256GB 2020 (MGND3) Gold', "category": "Laptops"}
]

const productsPhotosBaseLocation = "../../product-photos/";
const realProductCardsWidth = 317;



function createProductCard(width, productId, starsVal, price, productName, productCategory)
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

  const scale = width/refCardWidth;
  const cardHeight = scale*refCardHeight;
  const imgMargins = scale*refImgMargins;
  const imgWidth = scale*refImgWidth;
  const imgHeight = scale*refImgHeight;
  const addToCardBtnHeight = scale*refAddToCardBtnHeight;
  const descrBlkHeight = cardHeight - (2*imgMargins + imgHeight + addToCardBtnHeight);
  const starsBlkWidth = scale*refStarsBlkWidth;
  const starsBlkHeight = scale*refStarsBlkHeight;
  const cardBaseFontSize = scale*refCardBaseFontSize;
  const starIconWidth = scale*refStarIconWidth;
  const starIconHeight = scale*refStarIconHeight;
  console.log("sdsdfsdsdfsdfsfsfds test log")
  const card = `
    <div class="card" id="${productId}" style="font-size: ${cardBaseFontSize}px; width: ${width}px; height: ${cardHeight}px;">
      <img src="${productsPhotosBaseLocation}${productId}.png" class="card-product-photo" style="width: ${imgWidth}px; height: ${imgHeight}px; margin: ${imgMargins}px"/>
      <div class="card-description-block" style="width: 90%; height: ${descrBlkHeight}px">
        <div class="card-stars-block" style="width: ${starsBlkWidth}px; height: ${starsBlkHeight}px">
          <span>${starsVal}</span>
          <span> <img src="./images/StarIcon.svg" style="width: ${starIconWidth}px; height: ${starIconHeight}px"> </span>
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

function generateProductCards(wrapperClass, cardWidth, products)
{
  let productsHTML = '';
  products.forEach(elem => {
    productsHTML +=
      createProductCard(cardWidth, elem.Id, elem.stars, elem.price, elem.description, elem.category);
  });
  document.querySelector('.'+wrapperClass).innerHTML = productsHTML;
}

generateProductCards("wrapper", realProductCardsWidth, products);

