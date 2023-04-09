import type { user } from './types';
import { type LoaderFunction, defer } from 'react-router-dom';

const DUMMY_API_URL = 'https://dummyjson.com';

const fetchUsers = async (data: string | null) => {
  const defaultLimit = 'limit=30';
  const params = data ? `/search?q=${data}&${defaultLimit}` : `?${defaultLimit}`;
  const response = await fetch(`${DUMMY_API_URL}/users${params}`);

  const { users } = (await response.json()) as { users: (typeof user)[] };

  return users.map(({ id, image, firstName, birthDate, company, gender }) => ({
    id,
    image,
    firstName,
    birthDate,
    department: company.department,
    gender,
  }));
};

export const usersLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  return defer({ users: fetchUsers(search) });
};

export const fetchUser = async ({ id }) => {
  const response = await fetch(`${DUMMY_API_URL}/users/${id}`);

  const { users } = (await response.json()) as { users: (typeof user)[] };

  return users.map(({ id, image, firstName, birthDate, company, gender }) => ({
    id,
    image,
    firstName,
    birthDate,
    department: company.department,
    gender,
  }));
};
