import * as React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface Props {
  children?: React.ReactNode;
  register: UseFormRegisterReturn<keyof FormValues>;
}

export default function Select({ children, register }: Props) {
  return (
    <select className="input-select" {...register}>
      {children}
    </select>
  );
}
