import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DUMMY_API_URL = 'https://dummyjson.com';

export const api = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: DUMMY_API_URL,
  }),
  endpoints: () => ({}),
});
