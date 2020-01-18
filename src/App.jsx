import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from 'assests/background.jpg';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
