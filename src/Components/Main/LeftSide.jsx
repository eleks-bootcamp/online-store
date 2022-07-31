import './LeftSide.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Brands from './Brands';
import Categories from './Categories';

const LeftSide = (props) => {

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios('https://online-store.bootcamp.place/api/brands')
        .then ((res) => {
            setBrands(res.data)
        })
        axios('https://online-store.bootcamp.place/api/categories')
        .then ((res) => {
            setCategories(res.data)
        })
    }, [])

    return (
        <div className="left-side">
            <div className="filter-price">
                <p>Price</p>
                
            </div>

            <div className="brands_categories">
                <p>Categories</p>
                {
                    categories.map(item =>{
                        return <Categories categories={item} categoryURL={props.categoryURL} setCategoryURL={props.setCategoryURL} />
                    })
                }
                <div className="under_line_decorate"></div>
            </div>

            <div className="brands_categories">
                <p>Brands</p>
                {
                    brands.map(item =>{
                        return <Brands brand={item} setBrandsURL={props.setBrandsURL} brandsURL={props.brandsURL} />
                    })
                }
                <div className="under_line_decorate"></div>
            </div>
        </div>
    )
}

export default LeftSide;