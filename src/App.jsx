import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  max-width: 1920px;
  margin: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
      </Container>
    </BrowserRouter>
  );
}

export default App;
