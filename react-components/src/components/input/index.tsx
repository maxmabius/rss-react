import React from 'react';
import './index.css';

interface Props {
  type?: 'text' | 'date' | 'checkbox';
}

const Input = React.forwardRef(({ type = 'text' }: Props, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} type={type} />
));

export default Input;
