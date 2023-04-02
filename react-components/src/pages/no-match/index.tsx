import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function NoMatch() {
  return (
    <div className="no-match">
      <h2>404</h2>
      <p>
        Go to the &nbsp;
        <Link className="to-main" to="/">
          main page
        </Link>
        .
      </p>
    </div>
  );
}
