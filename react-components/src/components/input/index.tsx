import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

import type { FieldError } from 'react-hook-form/dist/types';

interface Props {
  type?: 'text' | 'date' | 'checkbox';
  register: UseFormRegisterReturn<keyof FormValues>;
  error?: FieldError | undefined;
}

export default function Input({ type = 'text', register, error }: Props) {
  return (
    <div>
      {error?.message}
      <input type={type} {...register} />
    </div>
  );
}
