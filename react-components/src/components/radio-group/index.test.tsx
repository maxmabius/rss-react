import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioGroup from '.';

describe('RadioGroup', () => {
  const ref1 = React.createRef<HTMLInputElement>();
  const ref2 = React.createRef<HTMLInputElement>();

  const radioGroupOptions = [
    {
      name: 'gender',
      value: 'male',
      ref: ref1,
    },
    {
      name: 'gender',
      value: 'female',
      ref: ref2,
    },
  ];

  it('renders component with radio type', () => {
    const { container } = render(<RadioGroup radioGroupOptions={radioGroupOptions} />);

    expect(container.querySelector('[type="radio"]')).toBeInTheDocument();
  });

  it('renders component with 2 radio buttons', () => {
    render(<RadioGroup radioGroupOptions={radioGroupOptions} />);

    expect(screen.getByText(radioGroupOptions[0].value)).toBeInTheDocument();
    expect(screen.getByText(radioGroupOptions[1].value)).toBeInTheDocument();
  });
});
