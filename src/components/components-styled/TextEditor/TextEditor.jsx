import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 10px;
    background-color: #00A1FC;
    border: none;
    border-radius: 27px;
    color: white;

    &::placeholder {
        color: white;
    }
    &:focus {
        outline: none;
    }
`;

const TextField = ({ label, type, placeholder, value, onChange }) =>{
    return(
        <Input type={type} placeholder="Digite aqui..." value={value} onChange={onChange} />
    );
};

export default TextField;