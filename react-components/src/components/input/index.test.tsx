import React from 'react';
import { render } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  it('renders component with default type', () => {
    const { container } = render(<Input register={() => {}} />);

    expect(container.querySelector('[type="text"]')).toBeInTheDocument();
  });

  it('renders component with date type', () => {
    const { container } = render(<Input type="date" name="firstName" register={() => {}} />);

    expect(container.querySelector('[type="date"]')).toBeInTheDocument();
  });

  it('renders component with checkbox type', () => {
    const { container } = render(<Input type="checkbox" register={() => {}} />);

    expect(container.querySelector('[type="checkbox"]')).toBeInTheDocument();
  });
});
