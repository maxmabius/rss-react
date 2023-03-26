import React from 'react';
import './index.css';

interface Props {
  label: string;
  position?: 'top' | 'left';
  children?: React.ReactNode;
}

export default function Field({ label, children, position = 'top' }: Props) {
  if (position === 'left') {
    return (
      <span className="field-box field-box__left">
        {children}
        <div className="field-label">{label}</div>
      </span>
    );
  }

  return (
    <div className="field-box">
      <div className="field-label">{label}</div>
      {children}
    </div>
  );
}
