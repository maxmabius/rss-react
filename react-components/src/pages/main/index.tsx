import * as React from 'react';

import Card from '../../components/card';

import type { User } from '../../pages/main/fake-users';

import './index.css';

const uploadUsers = async () => {
  return (await import('../../pages/main/fake-users')).fakeUsers as User[];
};

export default function Main() {
  const [searchValue, search] = React.useState(localStorage.getItem('searchValue') || '');
  const [users, setUsers] = React.useState<User[] | []>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  const getUsers = async () => {
    const users = await uploadUsers();
    setUsers(users);
  };

  React.useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
    const loadUsers = async () => {
      await getUsers();
    };

    loadUsers();
  }, [searchValue]);

  const filteredFakeUsers = users.filter((user) =>
    user.firstName.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="main-page">
      <input
        type="text"
        className="input"
        placeholder="Filter by first name..."
        onChange={handleSearch}
        value={searchValue}
      />
      <div className="list">
        {filteredFakeUsers?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
