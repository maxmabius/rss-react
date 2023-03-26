import React from 'react';
import './index.css';

interface Props {
  label: string;
  error?: string;
  position?: 'top' | 'left';
  children?: React.ReactNode;
}

export default function Field({ label, error = '', children, position = 'top' }: Props) {
  if (position === 'left') {
    return (
      <>
        <span className="field-box">
          <div className="field-box__left">
            {children}
            <div className="field-label">{label}</div>
          </div>
          <div>{error && <div className="field-error">{error}</div>}</div>
        </span>
      </>
    );
  }

  return (
    <div className="field-box">
      <div className="field-label">{label}</div>
      {children}
      {error && <div className="field-error">{error}</div>}
    </div>
  );
}
