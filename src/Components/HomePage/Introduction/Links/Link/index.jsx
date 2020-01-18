import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.a`
  padding: 0 .25rem;
`;
const Logo = styled.img`width: 4rem;`;

const Link = ({ to, alt, logoUrl }) => (
  <Container href={to} target="#">
    <Logo alt={alt} src={logoUrl} />
  </Container>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Link;
