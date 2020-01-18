import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assests/background.jpg';
import Introduction from './Introduction';
import NavigationBar from './NavigationBar';

const Container = styled.div`
  background-image: url("${backgroundImage}");
  max-width:100%;
  max-height:100%;
  object-fit: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HomePage = () => (
  <Container>
    <Introduction />
    <NavigationBar />
  </Container>
);

HomePage.propTypes = {};

export default HomePage;
