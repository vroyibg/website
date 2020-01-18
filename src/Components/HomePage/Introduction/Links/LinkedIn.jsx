import React from 'react';
import linkedInLogo from '../../../../assests/linkedin-logo.png';
import Link from './Link';

function LinkedIn() {
  return (
    <Link to="https://www.linkedin.com/in/haitran26/" logoUrl={linkedInLogo} alt="linkedIn" />
  );
}

export default LinkedIn;
