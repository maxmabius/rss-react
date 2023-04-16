import * as React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface TypeOption {
  name: string;
  value: string;
}

interface Props {
  radioGroupOptions: Array<TypeOption>;
  register: UseFormRegisterReturn<keyof FormValues>;
}

export default function RadioGroup({ radioGroupOptions, register }: Props) {
  return (
    <React.Fragment>
      {radioGroupOptions.map((option) => {
        return (
          <span key={option.value}>
            <input
              {...register}
              className="input-radio"
              value={option.value}
              name={option.name}
              type="radio"
            />
            <label htmlFor={option.value}>{option.value}</label>
          </span>
        );
      })}
    </React.Fragment>
  );
}
