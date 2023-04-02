import React from 'react';
import { render } from '@testing-library/react';
import Input from '.';

import formMethods from '../../tests/seeds/form-methods';
import { errorResolver } from '../../pages/create-form/error-resolver';

describe('Input', () => {
  const { register } = formMethods(errorResolver);

  it('renders component with default type', () => {
    const { container } = render(<Input name="firstName" register={register} />);

    expect(container.querySelector('[type="text"]')).toBeInTheDocument();
  });

  it('renders component with date type', () => {
    const { container } = render(<Input type="date" name="firstName" register={register} />);

    expect(container.querySelector('[type="date"]')).toBeInTheDocument();
  });

  it('renders component with checkbox type', () => {
    const { container } = render(<Input type="checkbox" name="firstName" register={register} />);

    expect(container.querySelector('[type="checkbox"]')).toBeInTheDocument();
  });
});
