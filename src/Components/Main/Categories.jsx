import './Categories.css';


const Categories = (props) => {
    return (
        <div className="categories">
            <div className="categories_checkbox">
                <input type="checkbox" name="categories" />
                <label for="subscribeNews">{props.categories}</label>
            </div>
        </div>
    )
}

export default Categories;