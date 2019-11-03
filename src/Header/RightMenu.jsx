import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightMenu = () => (
  <Container>
    <Link to="/about">About</Link>
  </Container>
);

export default RightMenu;
