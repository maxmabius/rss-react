import * as React from 'react';
import './index.css';

interface TypeOption {
  name: string;
  value: string;
  ref: React.RefObject<HTMLInputElement>;
}

interface Props {
  radioGroupOptions: Array<TypeOption>;
}

export default class RadioGroup extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        {this.props.radioGroupOptions.map((option) => {
          return (
            <span key={option.value}>
              <input
                defaultChecked={option.ref.current?.checked}
                ref={option.ref}
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
}
