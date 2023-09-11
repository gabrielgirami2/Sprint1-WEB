import React, { useState } from 'react';
import styled from 'styled-components';
import background from './assets/background.jpg';
import './App.css';
import Navbar from './components/components-styled/Navbar/navbar';
import Form from './components/components-styled/Forms/Form';
import TextField from './components/components-styled/TextEditor/TextEditor';
import Button from './components/components-styled/Button/button';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <Navbar/> 
      </header>

      <main>
        <Form/>

        <div className='messenger'>
          <TextField label="question" type="text" placeholder="Digite aqui..." value={name} onChange={handleNameChange}/>
          <Button><i class="bi bi-send"></i></Button>
        </div>
        {/* <div className='background'>
          <img src={background} alt="Logo" />
        </div> */}
      </main>
    </div>
  );
}

export default App;