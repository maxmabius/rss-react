import React from 'react';
import './index.css';

interface Props {
  type?: 'text' | 'date' | 'checkbox';
}

export default function Input({ type = 'text' }: Props) {
  return <input type={type} />;
}
