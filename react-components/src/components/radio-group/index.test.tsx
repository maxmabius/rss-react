import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioGroup from '.';

import formMethods from '../../tests/seeds/form-methods';
import { errorResolver } from '../../pages/create-form/error-resolver';

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

  const { register } = formMethods(errorResolver);

  it('renders component with radio type', () => {
    const { container } = render(
      <RadioGroup radioGroupOptions={radioGroupOptions} name="gender" register={register} />
    );

    expect(container.querySelector('[type="radio"]')).toBeInTheDocument();
  });

  it('renders component with 2 radio buttons', () => {
    render(<RadioGroup radioGroupOptions={radioGroupOptions} name="gender" register={register} />);

    expect(screen.getByText(radioGroupOptions[0].value)).toBeInTheDocument();
    expect(screen.getByText(radioGroupOptions[1].value)).toBeInTheDocument();
  });
});
