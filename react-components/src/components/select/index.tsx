import * as React from 'react';
import './index.css';

interface Props {
  label: string;
  children?: React.ReactNode;
}

export default function Select(props: Props) {
  return (
    <div>
      <div>{props.label}</div>
      <select>{props.children}</select>
    </div>
  );
}
