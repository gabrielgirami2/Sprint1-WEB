import React, { useState } from 'react';
import styled from 'styled-components';
import background from './assets/background.jpg';
import './App.css';
import Navbar from './components/components-styled/Navbar/navbar';
import Chatbot from './components/components-styled/Chatbot/chatbot';
import QuestionForm from './components/components-styled/Forms/questionForm';
import AnswerForm from './components/components-styled/Forms/AnswerForm';
import Button from './components/components-styled/Button/button';
import ListaIntegrantes from './components/Views/integrantes';
import TextField from './components/components-styled/TextEditor/TextEditor'

function App() {
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div className="App">
      <header>
        <Navbar/>

        <Button className='BTNintegrantes' ><i className='bi bi-people-fill'></i>
        </Button>
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
          <AnswerForm>usuario@exemplo.com</AnswerForm>
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

        
        {/* <div className='background'>
          <img src={background} alt="Logo" />
        </div> */}
        <div className='messenger'>
          <TextField label="question" type="text" placeholder="Digite aqui..." value={name} onChange={handleNameChange}/>
          <Button><i class="bi bi-send"></i></Button>
        </div>
      </main>
    </div>
  );
}

export default App;