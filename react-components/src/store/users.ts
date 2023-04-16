import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';

type UsersState = {
  searchValue: string;
  list: User[];
};

const initialState: UsersState = {
  searchValue: '',
  list: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.list = [...state.list, action.payload];
    },
  },
});
