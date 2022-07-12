class Card extends React.Component {
  #product = {};
  constructor (product = {}) {
    super();
    this.#product = product;
  }

  #getRatingIconCssClass(rating = 0) {
    const HALF_STAR_END_RATING_VAL = 4;
    let clsName = "bi bi-star";
    if (rating >= 1 && rating <= HALF_STAR_END_RATING_VAL) {
      clsName = "bi bi-star-half";
    } else if (rating > HALF_STAR_END_RATING_VAL) {
      clsName = "bi bi-star-fill";
    }
    return clsName;
  }

  render() {
    const {id, images, title, rating, price, category, brand} = this.#product;
    const ratingIconCssClass = this.#getRatingIconCssClass(rating);
    return (
      <div className="card" id={id} data-brand={brand}>
        <img src={images[0]} className="card-product-photo"/>
        <div className="card-description-block">
          <div className="card-stars-block">
            <span>{rating}</span>
            <span><i className={ratingIconCssClass}></i></span>
          </div>
          <span className="card-product-price">{price}</span>
          <span className="card-product-name">{title}</span>
          <span className="card-product-category">{category}</span>
        </div>
        <div className="card-btn-add-to-cart" /*style="width: 100%; height: 40px"*/>
          <span>{'Add to card'.toUpperCase()}</span>
        </div>
      </div>
    )
  }
}
export default Card;
