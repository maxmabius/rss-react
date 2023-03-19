import * as React from 'react';

import './index.css';

interface UserProps {
  image: string;
  maidenName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  department: string;
}

export default function Card({ user }: { user: UserProps }) {
  return (
    <div className="card">
      <img className="avatar" src={user.image} alt={user.maidenName} />
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>{user.birthDate}</div>
      <div>{user.department}</div>
    </div>
  );
}
