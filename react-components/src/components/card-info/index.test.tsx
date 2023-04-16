import { type Mock, expect, describe, it, vi, afterEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import { usersApi } from '../../store/users';
import type { InfoUser } from '../../types';
import CardInfo from '.';

vi.mock('../../store/users');

const info: InfoUser = {
  userId: 1,
  address: '629 Debbie Drive',
  city: 'Nashville',
  postalCode: '37076',
  state: 'TN',
};

describe('test UsersDetails component', () => {
  afterEach(() => {
    expect(usersApi.useGetUserQuery).toHaveBeenCalled();
  });

  it('show the spinner when fetching data', () => {
    (usersApi.useGetUserQuery as Mock).mockReturnValue({ isFetching: true });

    render(<CardInfo {...info} />);
    expect(screen.getByRole('spinner')).toBeInTheDocument();
  });

  it('show the error when error fetching data', () => {
    (usersApi.useGetUserQuery as Mock).mockReturnValue({
      error: { status: 404, data: { message: 'Not found' } },
    });

    render(<CardInfo {...info} />);
    expect(screen.getByText('api error')).toBeInTheDocument();
  });

  it('show the info when fetched successfully', () => {
    (usersApi.useGetUserQuery as Mock).mockReturnValue({
      data: {
        company: {
          address: info,
        },
      },
    });

    render(<CardInfo {...info} />);
    expect(screen.getByText(info.address)).toBeInTheDocument();
  });
});
