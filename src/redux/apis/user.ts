import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';
interface IResponseUser {
  user: User;
}
interface User {
  email: string;
  name: string;
}
export const userApi = createApi({
  reducerPath: 'user',
  refetchOnFocus: true,
  tagTypes: ['user'],
  baseQuery,
  // keepUnusedDataFor: Infinity,
  endpoints: builder => ({
    createNewUser: builder.query({
      query: (obj: User) => ({
        url: '/users',
        method: 'POST',
        body: obj,
      }),
      providesTags: ['user'],
      transformResponse: (response: IResponseUser) => response.user,
    }),
  }),
});

export const { useCreateNewUserQuery } = userApi;
