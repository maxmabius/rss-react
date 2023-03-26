import * as React from 'react';
import './index.css';

interface TypeOption {
  name: string;
  value: string;
}

interface Props {
  radioGroupOptions: Array<TypeOption>;
}

export default function RadioGroup({ radioGroupOptions }: Props) {
  return (
    <React.Fragment>
      {radioGroupOptions.map((option) => {
        return (
          <span key={option.value}>
            <input className="input-radio" value={option.value} name={option.name} type="radio" />
            <label htmlFor={option.value}>{option.value}</label>
          </span>
        );
      })}
    </React.Fragment>
  );
}
