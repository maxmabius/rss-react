import React from 'react';
import type { FieldError } from 'react-hook-form/dist/types';
import './index.css';

interface Props {
  label: string;
  error?: FieldError | undefined;
  position?: 'top' | 'left';
  children?: React.ReactNode;
}

interface Props2 {
  error?: FieldError | undefined;
}

function ErrorMessage({ error }: Props2) {
  return <>{error?.message && <div className="field-error">{error?.message}</div>}</>;
}

export default function Field({ label, error, children, position = 'top' }: Props) {
  if (position === 'left') {
    return (
      <React.Fragment>
        <span className="field-box">
          <div className="field-box__left">
            {children}
            <div className="field-label">{label}</div>
          </div>
          <div>
            <ErrorMessage error={error} />
          </div>
        </span>
      </React.Fragment>
    );
  }

  return (
    <div className="field-box">
      <div className="field-label">{label}</div>
      {children}
      <ErrorMessage error={error} />
    </div>
  );
}
