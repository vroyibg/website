import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  max-width: 1920px;
  margin: auto;
  height: 100vh;
`;

const Content = styled.div`
display: flex;
justify-content: center;
align-content: center;
font-size: 3rem;
color: darkgoldenrod;
flex-direction: row;
height: 100%;
text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Content>
          <span style={{ display: 'inline-block' }}>
Hi, there
            <br />
this website is under construction please check back soon.
          </span>
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
