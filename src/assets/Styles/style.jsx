import React from 'react';
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
    corTextNav: "#19deec",
    corTexto: "#262626",
    corTitulo: "#ff0000",
    corTheme: "#000",
    corTituloPand: "red",
};

export const darkTheme = {
    backgroundColor: css`${backgroundDark} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
    corTexto: "#dcdcdc",
    corTextNav: "#19deec",
    corTitulo: "#b7b7b7",
    corTheme: "#fff",
    corTituloPand: "#7e0505",
    corFundoText: "linear-gradient(to bottom, #0b60a1, #212529)"
};

export const Container = styled.div`
    animation: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.corTexto};
    width: 100vw;
    height: 100vh;
`;

export const Footer = styled.footer`
    content: '© 2023 - PortoSeguro/GFV Corp.';
`;