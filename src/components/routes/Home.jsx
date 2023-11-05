import React from 'react';
import { Link } from 'react-router-dom';
import { Selector, DivIconHome, ButtonHome } from '../../assets/Styles/style';
import LogoPorto from '../../assets/img/logo-portoseguro-blue.svg';
import styled from 'styled-components';
import IconTow from '../../assets/img/Tow.svg';
import IconList from '../../assets/img/List.svg';

const IconPorto = styled.img`
  transform: scale(0.7);
`;

const ButtonDiv = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(-8px);
  height: 100%;
`;

const ImgDiv = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  width: 20%;
  justify-content: center;
`;

function Home() {
  return (
    <Selector>
      <DivIconHome>
        <IconPorto src={LogoPorto} alt="Logo" />
      </DivIconHome>

      <ButtonDiv>
        <Link to="/request" className='linkButtonStyle'>
          <ButtonHome className="btn">
            <span className="text">Solicitar</span>
            <ImgDiv>
              <img src={IconTow} className="icon IconRequest" alt="icon" />
            </ImgDiv>
          </ButtonHome>
        </Link>
        <Link to="/accompany" className='linkButtonStyle AcompanyStyle'>
          <ButtonHome className="btn">
            <span className="text">Acompanhar</span>
            <ImgDiv>
              <img src={IconList} className="icon IconAcompanyStyle" alt="icon" />
            </ImgDiv>
          </ButtonHome>
        </Link>
      </ButtonDiv>
    </Selector>
  );
}

export default Home;