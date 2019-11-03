import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: 1920,
          margin: 'auto',
        }}
      >
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
