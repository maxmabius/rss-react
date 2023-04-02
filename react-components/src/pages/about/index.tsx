import * as React from 'react';
import reactLogo from '../../assets/react.svg';

import './index.css';

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}
