import Config from 'react-native-config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {REHYDRATE} from 'redux-persist';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.BASE_URL}),
  refetchOnReconnect: true,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;
