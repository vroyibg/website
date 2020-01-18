import React from 'react';
import Link from './Link';
import githubLogo from '../../../../assests/github-logo.png';

export default function Github() {
  return (
    <Link to="https://www.github.com/vroyibg/" alt="github" logoUrl={githubLogo} />
  );
}
