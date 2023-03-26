import React from 'react';
import './index.css';

interface Props {
  type?: 'text' | 'date' | 'checkbox';
}

const Input = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} type={props.type} />
));

export default Input;
