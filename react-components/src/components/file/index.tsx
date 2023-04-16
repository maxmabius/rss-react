import * as React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface Props {
  register: UseFormRegisterReturn<keyof FormValues>;
}

export default function File({ register }: Props) {
  return <input type="file" {...register} />;
}
