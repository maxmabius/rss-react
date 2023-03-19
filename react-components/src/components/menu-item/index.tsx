import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

interface MenuItemProps {
  name: string;
  to: string;
}

export default function MenuItem({ name, to }: MenuItemProps) {
  return (
    <li className="item">
      <NavLink to={to}>{name}</NavLink>
    </li>
  );
}
