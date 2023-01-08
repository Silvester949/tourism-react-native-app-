import {createSlice} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {usersApi} from '../services/users';

const initialState = {
  list: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export default userSlice.reducer;
