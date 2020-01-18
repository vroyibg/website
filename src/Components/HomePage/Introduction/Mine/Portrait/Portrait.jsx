import React from 'react';
import portrait from 'assests/portrait.jpg';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  padding-bottom: 1rem;
`;

function Portrait() {
  return <Image alt="portrait" src={portrait} />;
}

export default Portrait;
