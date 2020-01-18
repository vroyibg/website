import React from 'react';
import styled from 'styled-components';
import Mine from './Mine';
import Links from './Links';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Introduction() {
  return (
    <Container>
      <Mine />
      <Links />
    </Container>
  );
}
