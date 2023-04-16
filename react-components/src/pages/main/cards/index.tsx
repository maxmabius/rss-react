import * as React from 'react';

import Card from '../../../components/card';
import Spinner from '../../../components/spinner';

import { useAppSelector } from '../../../store';
import { usersApi } from '../../../store/users';

import './index.css';

export default function Cards() {
  const searchValue = useAppSelector((state) => state.searchUsers.name);
  const { data: users, error, isFetching } = usersApi.useGetUsersQuery(searchValue);

  return (
    <div className="list">
      {isFetching && <Spinner />}
      {error && <div>Could not load users from api...</div>}
      {users?.length === 0 && <div>Could not load users from api...</div>}
      {!isFetching && users?.map((user) => <Card key={user.id} user={user} />)}
    </div>
  );
}
