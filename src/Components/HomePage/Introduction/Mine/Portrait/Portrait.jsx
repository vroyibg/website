import React from 'react';
import portrait from '../../assests/portrait.jpg';

class Portrait extends React.Component {
  render() {
    return <img src={portrait} style={{ borderRadius: '50%', paddingBottom: '1rem' }} />;
  }
}

export default Portrait;
