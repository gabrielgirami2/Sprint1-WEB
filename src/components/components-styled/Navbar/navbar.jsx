import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Snavbar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4vh;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: #0B99FF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

function Navbar(){
    return(
        <Snavbar>
            <img className='navImg' src={logo} alt="Logo" />
        </Snavbar>
    );
}

export default Navbar;