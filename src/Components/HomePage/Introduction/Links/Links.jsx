import React from 'react';
import styled from 'styled-components';
import LinkedIn from './LinkedIn';
import Github from './Github';

const Container = styled.div``;

function Links() {
  return (
    <Container>
      <LinkedIn />
      <Github />
    </Container>
  );
}

export default Links;
