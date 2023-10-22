import React from 'react';
import Selector from './components/sem nome/selector';
import './assets/Styles/App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header/>          
      <Selector />
      <footer>
        <p>© 2023 - PortoSeguro/GFV Corp.</p>
      </footer>
    </div>
  );
}

export default App;