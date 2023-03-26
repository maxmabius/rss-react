import * as React from 'react';
import './index.css';

interface Props {
  label: string;
  children?: React.ReactNode;
}

export default function File(props: Props) {
  return (
    <div>
      <div>{props.label}</div>
      <input type="file" />
    </div>
  );
}
