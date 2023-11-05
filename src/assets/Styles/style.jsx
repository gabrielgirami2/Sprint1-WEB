import styled, { keyframes, css } from "styled-components";

// #region keyframes
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
// #endregion

// #region Theme
export const lightTheme = {
  backgroundColor: css`${backgroundLight} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#00A9FF",
  colorTexto: "#262626",
  colorBackIcon: "#fff",
  colorBackButton: "#A3DEFF",
  colorText: "#00A9FF",
  colorBackDialogChat: "#f1f1f1",
  colorBackDialogUser: "#00A9FF",
  colorBackDialogChatText: "#333",
  colorBackDialogText: "#000",
  colorBackButtonChat: "#41bbff",
  colorBackTextChat: "#fff",
};

export const darkTheme = {
  backgroundColor: css`${backgroundDark} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#0080ff",
  colorTexto: "#dcdcdc",
  colorBackIcon: "#262626",
  colorBackButton: "#234eceee",
  colorText: "#b3b3b3",
  colorBackDialogChat: "#262626",
  colorBackDialogUser: "#1074d8",
  colorBackDialogChatText: "#d4d4d4",
  colorBackButtonChat: "#064da9",
  colorBackTextChat: "#262626",
  colorBackDialogText: "#fff",
};
// #endregion


// #region app
export const Container = styled.div`
  animation: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorTexto};
  width: 100vw;
  height: 100vh;
`;
// #endregion


// #region Home
export const DivIconHome = styled.div`
  background-color: ${(props) => props.theme.colorBackIcon};
  width: 14%;
  height: 15%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  transform: translate(304%, -46%);
  box-shadow: 11px 16px 29px 3px rgba(0, 0, 0, 0.20);
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
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 11px 16px 27px 3px rgba(0, 0, 0, 0.20);
  background: ${(props) => props.theme.colorBackButton};
  color:  ${(props) => props.theme.colorText};

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  &:focus {
    outline: none;
  }
`;
// #endregion


// #region Resquest
const Message = styled.div` 
  padding: 24px 18px;
  margin: 5px;
  max-width: 70%;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 4vh;
  background-color: #000;
`;

export const ChatMessage = styled(Message)`
  background-color: ${(props) => props.theme.colorBackDialogChat};
  color: ${(props) => props.theme.colorBackDialogChatText};
  align-self: flex-start;
  margin-left: 18px;
  font-size: 2.7rem;
  border-radius: 30px 30px 30px 0px;
`;

export const UserMessage = styled(Message)`
  background-color: ${(props) => props.theme.colorBackDialogUser};
  color: ${(props) => props.theme.colorBackDialogText};
  align-self: flex-end;
  margin-right: 18px;
  font-size: 2.7rem;
  border-radius: 30px 30px 0px 30px;
`;

export const ChatSend = styled.div`
  position: relative;
  bottom: 30px;
  background-color: ${(props) => props.theme.colorBackTextChat};;;
  width: 96%;
  max-height: 380px;
  margin-top: 75px;
  border-radius: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 24px 6px rgba(0, 0, 0, 0.2);
`;

export const Textarea = styled.textarea`
  width: 89%;
  max-height: 375px;
  border: none;
  font-size: 3em;
  margin-left: 25px;
  border-radius: 22px;
  background: none;
  outline: none !important;
  resize: none;
  color: ${(props) => props.theme.colorBackDialogText};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 2px; 
  overflow-wrap: break-word;

  &::placeholder {
    color: #828E9E;
    font-weight: 300;
    letter-spacing: 10px;
    line-height: 200%;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 60px;
  color: ${(props) => props.theme.colorBackButtonChat};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

// #endregion