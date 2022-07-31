import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/Main/MainContent';
import { useState } from 'react';

const App = () => {

  const [choseProducts, setChoseProducts] = useState([])
  const [productCount, setProductCount] = useState(0);
  const [brandsURL, setBrandsURL] = useState([]);
  const [categoryURL, setCategoryURL] = useState([]);
  console.log(categoryURL);
  return (
    <div className='App _container'>
      <Header choseProducts={choseProducts} setChoseProducts={setChoseProducts} productCount={productCount} setProductCount={setProductCount}  />
      <MainContent setCategoryURL={setCategoryURL} categoryURL={categoryURL} setBrandsURL={setBrandsURL} brandsURL={brandsURL} choseProducts={choseProducts} setChoseProducts={setChoseProducts} setProductCount={setProductCount} />
    </div>
  );
}

export default App;
