import React from 'react';
import type { UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

import type { FieldError } from 'react-hook-form/dist/types';

interface Props {
  name: keyof FormValues;
  type?: 'text' | 'date' | 'checkbox';
  register: UseFormRegister<FormValues>;
  error?: FieldError | undefined;
}

export default function Input({ type = 'text', name, register, error }: Props) {
  return (
    <div>
      {error?.message}
      <input type={type} {...register(name)} />
    </div>
  );
}
