import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, lightTheme, darkTheme, Footer } from './assets/Styles/style';
import Home from './components/Views/Home';
import Request from './components/Views/Request';
import Accompany from './components/Views/Accompany';
import './assets/Styles/App.css';   

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request />} />
          <Route path='/accompany' element={<Accompany />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </Container>
  </ThemeProvider>
  );
}

export default App;