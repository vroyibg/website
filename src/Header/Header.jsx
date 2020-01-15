import React from 'react';
import styled from 'styled-components';
import RightMenu from './RightMenu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

const Name = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: rebeccapurple;
`;

const Header = () => (
  <Container>
    <Name>Hai Tran</Name>
    <RightMenu />
  </Container>
);

export default Header;
