import * as React from 'react';

import Card from './card';

import fakeUsers from './fake-users';

import './index.css';

export default function Main() {
  return (
    <div>
      <h2>Main page</h2>
      <div className="list">
        {fakeUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
