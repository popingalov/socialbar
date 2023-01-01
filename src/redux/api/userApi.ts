import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from 'redux/auth/authSlice';
import { IUser } from 'types/user';
import baseQuery from 'redux/baseQuery';
import { USER_URL, TAGS_TYPES } from 'constants/api';
import { setLanguage, setStartupScreen } from 'redux/settings/settingsSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getMe: builder.query<IUser, void>({
      query() {
        return {
          url: `${USER_URL}/me`,
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setLanguage(data.locale));
          // dispatch(setStartupScreen(data.startPage));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
