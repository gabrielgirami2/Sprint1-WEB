import React from 'react';
import styled from 'styled-components';
import Button from '../Button/button';
import './chatbox.css';

function Chatbot(){
    return(
        <Button className='BTNchat'>
            <i class="bi bi-chat-dots"></i>
            {/* <div className='messenger'>
                <TextField label="question" type="text" placeholder="Digite aqui..." value={name} onChange={handleNameChange}/>
                <Button><i class="bi bi-send"></i></Button>
            </div> */}
        </Button>
    );
}

export default Chatbot;