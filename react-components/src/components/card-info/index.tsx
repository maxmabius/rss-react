import * as React from 'react';
import ModalClose from '@mui/joy/ModalClose';
import Spinner from '../spinner';

import { fetchUser } from '../../api';

import type { User } from '../../types';

import './index.css';

export default function CardInfo({ userId }: { userId: number }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const loadCard = async () => {
      setIsLoading(true);

      const user = await fetchUser({ id: userId });

      setUser(user);
      setIsLoading(false);
    };

    loadCard();
  }, [userId]);

  if (isLoading) {
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
