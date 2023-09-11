import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import background from './assets/background.jpg';
import './App.css';
import Navbar from './components/components-styled/Navbar/navbar';
import QuestionForm from './components/components-styled/Forms/questionForm';
import AnswerForm from './components/components-styled/Forms/AnswerForm';
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
        <Navbar>
          <img className='navImg' src={logo} alt="Logo" />
        </Navbar>
      </header>

      <main>
        <div className='description'>
          <QuestionForm >Digite seu CPF</QuestionForm>
        </div>

        <div className='description'>
          <AnswerForm>123.456.789-00</AnswerForm>
        </div>

        <div className='description'>
          <QuestionForm >Digite seu e-mail</QuestionForm>
        </div>

        <div className='description'>
          <AnswerForm>usuario@gmail.com</AnswerForm>
        </div>

        <div className='description'>
          <QuestionForm >Digite sua localização atual</QuestionForm>
        </div>

        <div className='description'>
          <AnswerForm>Avenida Paulista, 800</AnswerForm>
        </div>

        <div className='description'>
          <QuestionForm >Modelo do chassi do veículo</QuestionForm>
        </div>

        <div className='description'>
          <AnswerForm>Tamanho das rodas do veículo</AnswerForm>
        </div>
      
        <div className='description'>
          <QuestionForm >O veículo é modificado?</QuestionForm>
        </div>

        <div className='description'>
          <AnswerForm>Resposta</AnswerForm>
        </div>

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