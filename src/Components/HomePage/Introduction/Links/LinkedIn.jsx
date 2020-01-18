import React from 'react';
import linkedinLogo from '../../assests/linkedin-logo.png';

export function LinkedIn() {
  return (
    <a href="https://www.linkedin.com/in/haitran26/" target="#">
      <img style={{ width: '4rem' }} src={linkedinLogo} />
    </a>
  );
}
