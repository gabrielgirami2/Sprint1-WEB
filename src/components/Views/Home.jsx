import React from 'react';
import { Link } from 'react-router-dom';
import { Selector, DivIconHome, ButtonHome } from '../../assets/Styles/style';
import LogoPorto from '../../assets/img/logo-portoseguro-blue.svg';
import styled from 'styled-components';
import IconTow from '../../assets/img/Tow.svg';

const IconPorto = styled.img`
  transform: scale(0.7);
`;

const ButtonDiv = styled.div`
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(32%);z
`;

function Home() {
  return (
    <Selector>
      <DivIconHome>
        <IconPorto src={LogoPorto} alt="Logo" />
      </DivIconHome>

      <ButtonDiv>
        <Link to="/request">
        </Link>
          <ButtonHome className="btn">
            <span className="icon">
              <img src={IconTow} alt="icon" />
            </span>
            <span className="text">Solicitar</span>
          </ButtonHome>

        <br/>

        <Link to="/accompany">
          <ButtonHome className="btn">
            <span className="icon">
              <img src={IconTow} alt="icon" />
            </span>
            <span className="text">Acompanhar</span>
          </ButtonHome>
        </Link>
      </ButtonDiv>
    </Selector>
  );
}

export default Home;