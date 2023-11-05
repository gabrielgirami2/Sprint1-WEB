import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Container, lightTheme, darkTheme} from './assets/Styles/style';
import './assets/Styles/App.css';   
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
  <ThemeProvider theme={theme ==='dark' ?  darkTheme : lightTheme}>
    <Container> 
      <label className="switch">
        <input theme={theme} onClick={toggleTheme} type="checkbox" ></input>
        <span className="slider"></span>
      </label>
      <Outlet />
      {/* <Footer/> */}
    </Container>
  </ThemeProvider>
  );
}

export default App;