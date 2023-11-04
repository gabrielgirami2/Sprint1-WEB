import styled, { keyframes, css } from "styled-components";

const backgroundLight = keyframes`
  0% { background: #CDF5FD; }
  50% { background: #A0E9FF; }
  100% { background: #89CFF3; }
`;

const backgroundDark = keyframes`
  0% { background: #6393b7; }
  50% { background: #4d82aa; }
  100% { background: #3b7aaa; }
`;

export const lightTheme = {
  backgroundColor: css`${backgroundLight} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#00A9FF",
  colorTexto: "#262626",
  colorbackIcon: "#fff",
  colorBackButton: "#A3DEFF",
  colorText: "#000",

  corTextNav: "#19deec",
  corTitulo: "#ff0000",
  corTheme: "#000",
  corTituloPand: "red",
};

export const darkTheme = {
  backgroundColor: css`${backgroundDark} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#0080ff",
  colorTexto: "#dcdcdc",
  colorbackIcon: "#262626",
  colorBackButton: "#0233c8f0",
  colorText: "#898383",


  corTextNav: "#19deec",
  corTitulo: "#b7b7b7",
  corTheme: "#fff",
  corTituloPand: "#7e0505",
  corFundoText: "linear-gradient(to bottom, #0b60a1, #212529)"
};

export const Container = styled.div`
  animation: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorTexto};
  width: 100vw;
  height: 100vh;
`;

export const DivIconHome = styled.div`
  background-color: ${(props) => props.theme.colorbackIcon};
  width: 14%;
  height: 15%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  transform: translate(304%, -46%);
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
  height: 36%;
  border-radius: 50px;
  transform: translate(15%, 89%);
  box-shadow: 23px 21px 38px 2px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colorBackMain};
`;

export const ButtonHome = styled.button`
  width: 65%;
  height: 14%;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  display: inline-flex;
  justify-content: space-around;
  background: ${(props) => props.theme.colorBackButton};
  color:  ${(props) => props.theme.colorText};

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  &:focus {
    outline: none;
  }
`;

export const Footer = styled.footer`
  content: '© 2023 - PortoSeguro/GFV Corp.';
`;