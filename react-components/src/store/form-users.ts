import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { FormUser } from '../types';

type FormUsersState = {
  users: FormUser[];
};

const initialState: FormUsersState = {
  users: [],
};

export const formUsersSlice = createSlice({
  name: 'formhUsers',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<FormUser>) => {
      state.users = [action.payload, ...state.users];
    },
  },
});
