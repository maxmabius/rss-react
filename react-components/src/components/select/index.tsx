import * as React from 'react';
import type { UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface Props {
  children?: React.ReactNode;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
}

export default function Select({ children, name, register }: Props) {
  return (
    <select className="input-select" {...register(name)}>
      {children}
    </select>
  );
}
