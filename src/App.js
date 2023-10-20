import React, { useState } from 'react';
import Chat from './components/Views/Chat/chat';
import Menu from './components/Menu/menu';
import './App.css';
import Navbar from './components/Navbar/narbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <main>
        <Menu/>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;