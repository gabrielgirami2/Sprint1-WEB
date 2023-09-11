import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import background from './assets/background.jpg';
import './App.css';
import Navbar from './components/components-styled/Navbar/navbar';
import Chatbot from './components/components-styled/Chatbot/chatbot';
import QuestionForm from './components/components-styled/Forms/questionForm';
import AnswerForm from './components/components-styled/Forms/AnswerForm';
import Button from './components/components-styled/Button/button';
import ListaIntegrantes from './components/Views/integrantes';

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
        {showPopup && (
        <div className="popup">
          {<ListaIntegrantes/>}
          <h2>Este é o seu pop-up</h2>
          <p>Aqui você pode adicionar o conteúdo que deseja exibir no pop-up.</p>
          <button onClick={togglePopup}>Fechar</button>
        </div>
      )}
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

        
        {/* <div className='background'>
          <img src={background} alt="Logo" />
        </div> */}
        <Chatbot/>
      </main>
    </div>
  );
}

export default App;