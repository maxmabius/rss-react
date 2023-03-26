import * as React from 'react';
import './index.css';

interface Props {
  children?: React.ReactNode;
}

const Select = React.forwardRef((props: Props, ref: React.Ref<HTMLSelectElement>) => (
  <select ref={ref} className="input-select">
    {props.children}
  </select>
));

export default Select;
