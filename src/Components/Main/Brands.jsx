import './Brands.css';
import { useState } from 'react';

const Brands = (props) => {
    
    const [checkBrand, setCheckBrand] = useState(false)

    const soldCheckbox = ({ target: { checked, value } }) => {
        console.log(checkBrand, checked);
        
        setCheckBrand(checked);
        props.setBrandsURL(prev => [...prev, value])
        console.log(props.brandsURL);
      };

    return (
        <div className="brands">
            <div className="brands_checkbox">
                <input type="checkbox" name="brands" checked={checkBrand} value={props.brand} onChange={soldCheckbox} />
                <label for="subscribeNews">{props.brand}</label>
            </div>
        </div>
    )
}

export default Brands;

