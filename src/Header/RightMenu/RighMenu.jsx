import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
`;

const RightMenu = () => (
  <Container>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/">ABOUT</NavLink>
    <NavLink to="/">BLOG</NavLink>
    <NavLink to="/">CONTACT</NavLink>
  </Container>
);

export default RightMenu;
