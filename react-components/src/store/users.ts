import type { User } from '../types';

import { api } from './api';

type UsersResponse = { users: User[]; total: number; skip: number; limit: number };

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: (q, limit = 30) => {
        return {
          url: '/users/search',
          params: { q, limit },
        };
      },
      transformResponse: (response: UsersResponse) => {
        return response.users;
      },
    }),

    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});
