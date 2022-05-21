import './Card.css';

const Card = (props) => {
    
    const setChoseProducts = props.setChoseProducts;
    const choseProducts = props.choseProducts;
    const setProductCount= props.setProductCount

    const cartCount = () => {
        setProductCount(prev => prev + 1)
    }

    return (
        <div className="card-wrapper">
            <div className="card-flex">
                <div className="card-img">
                    <img src={props.img} alt={props.category} />
                </div>
                <div className="card-info">
                    <div className="info-rate-price">
                        <div className="card-rate">
                            <span>{props.rate}</span>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26296 3.60776L6.99999 0L4.73701 3.60776L0.34259 4.49139L3.33842 7.60474L2.88549 11.7586L6.99999 10.075L11.1145 11.7586L10.6616 7.60474L13.6574 4.49139L9.26296 3.60776ZM11.6722 5.11223L8.64429 4.50338L6.99999 1.88193L5.35568 4.50338L2.32777 5.11223L4.38321 7.24829L4.06171 10.1968L6.99999 8.99452L9.93826 10.1968L9.61676 7.24829L11.6722 5.11223Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="card-price">
                            <span>{props.price}</span>
                        </div>
                    </div>
                    <div className="card-decs">
                        <p>{props.title}</p>
                    </div>
                    <div className="card-category">
                        <span>{props.category}</span>
                    </div>
                </div>
            </div>
            <div onClick={() => cartCount()}>
                <a 
                    className="card-btn-add" 
                    onClick={setChoseProducts => {
                        choseProducts.push(props.item);
                        console.log(choseProducts);
                        }
                    }

                >
                    <span>add to card</span> {/* ТРЕБА ПОФІКСИТИ */}
                </a>
            </div>
        </div>
    )
}

export default Card;