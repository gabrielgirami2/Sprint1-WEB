import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fff;
`;

const Nav = styled.div`
  background-color: #007aff;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavTitle = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const IonContent = styled.div`
  padding: 20px;
`;

const MessageWrapper = styled.div`
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px;
`;

const ProfilePic = styled.img`
  max-width: 50px;
  border-radius: 50%;
`;

const ChatBubble = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
`;

const MessageText = styled.div`
  font-size: 16px;
`;

const MessageDetail = styled.div`
  font-size: 14px;
  color: #777;
`;

const Footer = styled.div`
  background-color: #007aff;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageInput = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  background-color: #007aff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Request() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    // Implemente a lógica para enviar mensagens
    // Atualize o estado 'messages' com a nova mensagem
    // Limpe o estado 'inputMessage'
  };

  return (
    <Container>
      <Nav>
        <NavTitle>PortoChat</NavTitle>
      </Nav>
      <IonContent>
        {messages.map((message, index) => (
          <MessageWrapper key={index}>
            <ProfilePic src={message.user.pic} alt="Profile Pic" />
            <ChatBubble>
              <MessageText>{message.text}</MessageText>
              <MessageDetail>
                {message.user.username}, {message.date}
              </MessageDetail>
            </ChatBubble>
          </MessageWrapper>
        ))}
      </IonContent>
      <Footer>
        <MessageInput
          type="text"
          placeholder="Send a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </Footer>
    </Container>
  );
}

export default Request;