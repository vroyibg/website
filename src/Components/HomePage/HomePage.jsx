import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assests/background.jpg';
import Introduction from './Introduction';
import NavigationBar from './NavigationBar';

const Container = styled.div`
  background-image: url("${backgroundImage}");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
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
