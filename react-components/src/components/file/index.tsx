import * as React from 'react';
import type { UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface Props {
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
}

export default function File({ name, register }: Props) {
  return <input type="file" {...register(name)} />;
}
