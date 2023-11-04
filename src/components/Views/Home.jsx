import React from 'react';
import { Link } from 'react-router-dom';
import { Selector, DivIconHome, ButtonHome } from '../../assets/Styles/style';
import LogoPorto from '../../assets/img/logo-portoseguro-blue.svg';
import styled from 'styled-components';
import IconTow from '../../assets/img/Tow.svg';

const IconPorto = styled.img`
  transform: scale(0.7);
`;

function Home() {
  return (
    <Selector>
      <DivIconHome>
        <IconPorto src={LogoPorto} alt="Logo" />
      </DivIconHome>

      <Link to="/request">
        <button className="btn">
          <span className="icon">
            <img src={IconTow} alt="icon" />
          </span>
          <span className="text">MENU</span>
        </button>
      </Link>
    </Selector>
  );
}

export default Home;