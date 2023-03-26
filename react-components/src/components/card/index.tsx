import * as React from 'react';

import type { User } from '../../pages/main/fake-users';

import './index.css';

export default function Card({ user }: { user: User }) {
  return (
    <div className="card">
      <img className="avatar" src={user.image} alt={user.lastName} />
      <div>{user.firstName}</div>
      <div>{user.birthDate}</div>
      <div>{user.department}</div>
      <div>{user.gender}</div>
    </div>
  );
}
