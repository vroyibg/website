import React from 'react';
import githubLogo from '../../assests/github-logo.png';

export function Github() {
  return (
    <a href="https://www.github.com/vroyibg/" target="#">
      <img style={{ width: '4rem' }} src={githubLogo} />
    </a>
  );
}
