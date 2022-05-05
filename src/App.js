import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header/Header';
import MainContent from './Components/Main/MainContent';

function App() {
  return (
    <div className='App _container'>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
