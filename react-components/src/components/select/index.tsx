import * as React from 'react';
import './index.css';

interface Props {
  children?: React.ReactNode;
}

export default function Select(props: Props) {
  return (
    <select className="input-select">
      {/* <option disabled selected>
        {' '}
        -- select an option --{' '}
      </option> */}
      {props.children}
    </select>
  );
}
