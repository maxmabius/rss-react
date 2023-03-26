import React from 'react';
import './index.css';

interface Props {
  label: string;
  type?: 'text' | 'date' | 'checkbox' | 'checkbox';
}

export default function Input({ label, type = 'text' }: Props) {
  return (
    <div>
      <div>{label}</div>
      <input type={type} />
    </div>
  );
}
