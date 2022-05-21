import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/Main/MainContent';
import { useState } from 'react';

const App = () => {

  const [productCount, setProductCount] = useState(0)
  const [choseProducts, setChoseProducts] = useState([])

  return (
    <div className='App _container'>
      <Header productCount={productCount} choseProducts={choseProducts} setChoseProducts={setChoseProducts} setProductCount={setProductCount} />
      <MainContent choseProducts={choseProducts} setChoseProducts={setChoseProducts} setProductCount={setProductCount} />
    </div>
  );
}

export default App;
