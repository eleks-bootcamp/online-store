import './Brands.css';


const Brands = (props) => {
    return (
        <div className="brands">
            <div className="brands_checkbox">
                <input type="checkbox" name="brands" />
                <label for="subscribeNews">{props.brand}</label>
            </div>
        </div>
    )
}

export default Brands;