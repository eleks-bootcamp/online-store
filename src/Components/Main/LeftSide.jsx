import './LeftSide.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Brands from './Brands';
import Categories from './Categories';

const LeftSide = () => {

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios('http://online-store.bootcamp.place/api/brands')
        .then ((res) => {
            setBrands(res.data)
        })
        axios('http://online-store.bootcamp.place/api/categories')
        .then ((res) => {
            setCategories(res.data)
        })
    }, [])

    return (
        <div className="left-side">
            
            <div className="brands_categories">
                <p>Categories</p>
                {
                    categories.map(item =>{
                        return <Categories categories={item} />
                    })
                }
                <div className="under_line_decorate"></div>
            </div>

            <div className="brands_categories">
                <p>Brands</p>
                {
                    brands.map(item =>{
                        return <Brands brand={item} />
                    })
                }
                <div className="under_line_decorate"></div>
            </div>
        </div>
    )
}

export default LeftSide;