import { configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { api } from './api';
import { searchUsersSlice } from './search-users';
import { formUsersSlice } from './form-users';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    searchUsers: searchUsersSlice.reducer,
    formUsers: formUsersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
