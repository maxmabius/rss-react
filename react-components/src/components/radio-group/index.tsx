import * as React from 'react';
import './index.css';

interface TypeOption {
  name: string;
  value: string;
}

interface Props {
  legend: string;
  radioGroupOptions: Array<TypeOption>;
}

export default function RadioGroup({ legend, radioGroupOptions }: Props) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <React.Fragment>
        {radioGroupOptions.map((option) => {
          return (
            <span key={option.value}>
              <input value={option.value} name={option.name} type="radio" />
              <label htmlFor={option.value}>{option.value}</label>
            </span>
          );
        })}
      </React.Fragment>
    </fieldset>
  );
}
