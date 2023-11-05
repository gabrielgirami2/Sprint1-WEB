import React, { useState, useRef, useEffect} from 'react';
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
  // #region chat
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const [userInput, setUserInput] = useState('');
  const greeting = getGreeting();
  const [messages, setMessages] = useState([ 
    { text: `${greeting}, Como vai?\n Estamos aqui para te ajudar.`, sender: 'chat' },
    { text: 'Para prosseguirmos com a solicitação, peço gentilmente o seu CPF.', sender: 'chat' },
  ]);
  const getPost = async() => {
    try {
      const response = await axios.post('http://localhost:3000/request', {
        cpf: userInput,
      });
      setMessages([...messages, { text: response.data.message, sender: 'user' }]);
      setUserInput('');
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {

  })




  const textareaRef = useRef(null);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    } 
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      const cleanedMessage = cleanCPF(userInput);
      setMessages([...messages, { text: cleanedMessage, sender: 'user' }]);
      checkAPI(cleanedMessage);
      setUserInput('');
      setTextareaHeight('auto');  
    } 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const cleanCPF = (message) => {
    const cpfRegex = /(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11,14})/g;
    const cpfMatch = message.match(cpfRegex);
    if (cpfMatch) {
      return cpfMatch[0].replace(/[\.-]/g, '');
    }
    return message;
  };
  // #endregion

  // #region API
  const checkAPI = (cpf) => {
    axios.get(`https://api-gfvcorp.onrender.com/client?cpf=${cpf}`)
      .then((response) => {
        if (response.data) {
          setMessages([...messages, { text: response.data, sender: 'api' }]);
        } else {
          setMessages([...messages, { text: 'Não há registro.\n Crie seu cadastro agora.', sender: 'api' }]);
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
      });
  };
  // #endregion

  return (
    <Chat>
      <ChatDialog>
        {messages.map((message, index) => {
          if (message.sender === 'user') {
            return (
              <UserMessage key={index}>
                {message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </UserMessage>
            );
          } else if (message.sender === 'api') {
            return (
              <ChatMessage key={index}>
                {message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </ChatMessage>
            );
          } else {
            return (
              <ChatMessage key={index}>
                {message.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
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
}

export default Request;