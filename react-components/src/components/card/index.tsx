import * as React from 'react';
import Modal from '@mui/joy/Modal';

import CardInfo from '../card-info';

import type { User, FormUser } from '../../types';

import './index.css';

export default function Card({ user }: { user: User | FormUser }) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="card">
      <img className="avatar" src={user.image} alt={user.firstName} />
      <div>{user.firstName}</div>
      <div>{user.birthDate}</div>
      <div>{user.company.department}</div>
      <div>{user.gender}</div>
      <button onClick={() => setOpen(true)}>INFO</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <>
          <CardInfo key={user.id} userId={user.id} />
        </>
      </Modal>
    </div>
  );
}
