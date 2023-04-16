import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  name: string;
};

const initialState: SearchState = {
  name: '',
};

export const searchUsersSlice = createSlice({
  name: 'searchUsers',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});
