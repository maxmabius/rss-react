import React from 'react';
import { render } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  const ref = React.createRef<HTMLInputElement>();

  it('renders component with default type', () => {
    const { container } = render(<Input ref={ref} />);

    expect(container.querySelector('[type="text"]')).toBeInTheDocument();
  });

  it('renders component with date type', () => {
    const { container } = render(<Input type="date" ref={ref} />);

    expect(container.querySelector('[type="date"]')).toBeInTheDocument();
  });

  it('renders component with checkbox type', () => {
    const { container } = render(<Input type="checkbox" ref={ref} />);

    expect(container.querySelector('[type="checkbox"]')).toBeInTheDocument();
  });
});
