import React, { useState } from 'react';
import Chat from './components/Chat/chat';
import Menu from './components/Menu/menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>

      <main>
        <Menu/>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;