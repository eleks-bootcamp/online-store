import './Categories.css';
import { useState } from 'react';

const Categories = (props) => {
    
    const [checkCategory, setCheckCategory] = useState(false)

    const soldCheckbox = ({ target: { checked, value } }) => {
        // console.log(checkCategory, checked);
        if(checked === false) {
            setCheckCategory(checked);
            props.categoryURL.map((item, index) => {
                const elementsBeforeIndex = props.categoryURL.slice(0, index);
                console.log(elementsBeforeIndex);
                const elementsAfterIndex = props.categoryURL.slice(index + 1, props.categoryURL.length);
                console.log(elementsAfterIndex);
                const newArr = [
                    ...elementsBeforeIndex,
                    ...elementsAfterIndex
                ]
                console.log(newArr);
                props.setCategoryURL(newArr)
            })
        }else {
            setCheckCategory(checked);
            props.setCategoryURL(prev => [...prev, value])
        }
      };

    return (
        <div className="categories">
            <div className="categories_checkbox">
                <input type="checkbox" name="categories" checked={checkCategory} value={props.categories} onChange={soldCheckbox} />
                <label for="subscribeNews">{props.categories}</label>
            </div>
        </div>
    )
}

export default Categories;