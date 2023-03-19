import * as React from 'react';

import MenuItem from '../menu-item';
import './index.css';

export default function PageHeader() {
  return (
    <React.Fragment>
      <header className="page-header">
        <nav>
          <ul className="menu">
            <MenuItem name="Main" to="/" />
            <MenuItem name="About" to="/about" />
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
