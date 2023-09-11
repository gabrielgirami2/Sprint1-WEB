import React, { useState } from 'react';
import styled from 'styled-components';
import './styleForm.css'

const FquestionForm = styled.form`
    width: 242px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    
`;

const FanswerForm = styled.form`
    float: right;   
    width: 245px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
`;

function Form() {
    return(
        <div className='' style={{ paddingTop: '5vh' }}>
            <div className='description'>
                <FquestionForm >Digite seu CPF</FquestionForm>
            </div>

            <div className='description'>
                <FanswerForm>123.456.789-00</FanswerForm>
            </div>

            <div className='description'>
                <FquestionForm >Digite seu e-mail</FquestionForm>
            </div>

            <div className='description'>
                <FanswerForm>usuario@gmail.com</FanswerForm>
            </div>

            <div className='description'>
                <FquestionForm >Digite sua localização atual</FquestionForm>
            </div>

            <div className='description'>
                <FanswerForm>Avenida Paulista, 800</FanswerForm>
            </div>

            <div className='description'>
                <FquestionForm >Modelo do chassi do veículo</FquestionForm>
            </div>

            <div className='description'>
                <FanswerForm>Tamanho das rodas do veículo</FanswerForm>
            </div>
        
            <div className='description'>
                <FquestionForm >O veículo é modificado?</FquestionForm>
            </div>

            <div className='description'>
                <FanswerForm>Resposta</FanswerForm>
            </div>
        </div>
    );
}

export default Form;