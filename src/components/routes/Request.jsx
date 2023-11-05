import React, { useState, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { IoSend } from "react-icons/io5";
import { Button,  ChatMessage, ChatSend, Textarea, UserMessage } from '../../assets/Styles/style';

// #region styled
const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  overflow-y: auto;
`;

const ChatDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
// #endregion 

function getGreeting() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return 'Bom dia';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}

function Request() {
  // #region chat/API
  const greeting = getGreeting();
  const textareaRef = useRef(null);  
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [messages, setMessages] = useState([ 
    { text: `${greeting}, Como vai?\n Estamos aqui para te ajudar.`, sender: 'chat' },
    { text: 'Para prosseguirmos com a solicitação, peço gentilmente o seu CPF.', sender: 'chat' },
  ]);
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const cleanCPF = (message) => {
    const cpfRegex = /(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})/g;
    const cpfMatch = message.match(cpfRegex);
    if (cpfMatch) {
      const cleanedCPF = cpfMatch[0].replace(/\D/g, '');
      if (cleanedCPF.length === 11) {
        return cleanedCPF;
      }
    }
    return message;
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    } 
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      const cleanedMessage = cleanCPF(userInput);
      const newMessage = { text: userInput, sender: 'user' }; 
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setUserInput('');
      setTextareaHeight('auto');

      try {
        const response = await axios.get(`https://api-gfvcorp.onrender.com/client?cpf=${cleanedMessage}`);
        if (response.data.length === 0) {
          setMessages((prevMessages) => [...prevMessages, 
            { text: 'Não há existe nenhuma conta associada a esse serviço.\nVamos começar seu cadastro.', sender: 'chat' }
          ]);
        }else {
          const userId = response.data[0].id;
          const userName = response.data[0].nome;  
          setUserId(userId);
          
          const vehiclesResponse = await axios.get(`https://api-gfvcorp.onrender.com/vehicle?client=${userId}`);
          const vehicleId = vehiclesResponse.data[0].id;
          const vehiclePlaca = vehiclesResponse.data[0].placa;
          const vehiclesData = vehiclesResponse.data;
          setVehicles(vehicleId);

          if (vehiclesData.length === 0) {
            setMessages((prevMessages) => [...prevMessages, { text: `Seja bem-vindo ${userName}! \nVocê não possui veículos associados. Vamos começa a cadastrar seu veículo.`, sender: 'api' }]);
          } else {
            setVehicles(vehiclesData);
            setMessages((prevMessages) => [...prevMessages, {text: `Seja bem-vindo ${userName}! \nSelecione um veículo:`, sender: 'api' }]);
          }
          
          console.log(response.data, userId, userName, vehiclesResponse, vehicleId, vehiclePlaca);
        }
      } catch (error) {
        console.error('Erro ao acessar a API:', error);
      }
    }
  };

  // #endregion

  return (
    <Chat>
      <ChatDialog>
        {messages.map((message, index) => {
          if (message.sender === 'user') {
            return (
              <UserMessage key={index}>
                {typeof message.text === 'string' ? message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                )) : message.text }
              </UserMessage>
            );
          } else if (message.sender === 'api') {
            return (
              <ChatMessage  key={index}>
                {typeof message.text === 'string' ? message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                )) : message.text }
              </ChatMessage>
            );
          } else {
            return (
              <ChatMessage key={index}>
                {typeof message.text === 'string' ? message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                )) : message.text }
              </ChatMessage>
            );
          }
        })}
      </ChatDialog>
        <ChatSend>
          <Textarea ref={textareaRef} type="text" placeholder="Digite... " value={userInput} 
            onChange={handleUserInput} onKeyPress={handleKeyPress}  style={{ height: textareaHeight }} />
          <Button onClick={handleSendMessage}> <IoSend /> </Button>
        </ChatSend>
    </Chat>
  );
};

export default Request;