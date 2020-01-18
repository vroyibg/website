import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  align-items: center;
  height: 5rem;
`;

const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :visited {
    color: inherit;
  }
`;

function NavigationBar() {
  return (
    <Container>
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT</NavLink>
      <NavLink>CONTACT</NavLink>
      <NavLink>BLOG</NavLink>
    </Container>
  );
}

export default NavigationBar;
