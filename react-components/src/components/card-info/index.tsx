import * as React from 'react';
import ModalClose from '@mui/joy/ModalClose';
import Spinner from '../spinner';

import { usersApi } from '../../store/users';

import './index.css';

export default function CardInfo({ userId }: { userId: number }) {
  const { data: user, isFetching } = usersApi.useGetUserQuery(userId);

  if (isFetching) {
    return <Spinner />;
  }

  const noData = 'No data';
  const {
    address = noData,
    city = noData,
    postalCode = noData,
    state = noData,
  } = user?.company?.address || {};

  return (
    <div className="card-info">
      <ModalClose variant="outlined" />
      <div>{address}</div>
      <div>{city}</div>
      <div>{postalCode}</div>
      <div>{state}</div>
    </div>
  );
}
