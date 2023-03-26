import * as React from 'react';
import './index.css';

interface Props {
  children?: React.ReactNode;
}

const File = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} type="file" />
));

export default File;
