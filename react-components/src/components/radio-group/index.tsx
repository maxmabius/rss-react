import * as React from 'react';
import type { UseFormRegister } from 'react-hook-form/dist/types';
import type { FormValues } from '../../pages/create-form/index';
import './index.css';

interface TypeOption {
  name: string;
  value: string;
}

interface Props {
  radioGroupOptions: Array<TypeOption>;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
}

export default function RadioGroup({ radioGroupOptions, name, register }: Props) {
  return (
    <React.Fragment>
      {radioGroupOptions.map((option) => {
        return (
          <span key={option.value}>
            <input
              {...register(name)}
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
