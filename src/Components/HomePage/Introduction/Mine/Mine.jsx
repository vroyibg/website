import React from 'react';
import styled from 'styled-components';
import Portrait from './Portrait/Portrait';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  text-align: center;
`;

const Name = styled.span`font-size: 3rem;`;

const Title = styled.span`font-size: 2rem; color: antiquewhite`;

const Mine = () => (
  <Container>
    <Portrait />
    <Name>Hai Tran</Name>
    <Title>Software Engineer</Title>
  </Container>
);

export default Mine;
