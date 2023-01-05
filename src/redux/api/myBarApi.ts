import { IIngredient } from 'types/ingredient.d';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IBarResponse } from 'types/response.d.';

import baseQuery from 'redux/baseQuery';
import { TAGS_TYPES, MY_BAR_LIST_URL } from 'constants/api';

export const myBarApi = createApi({
  reducerPath: 'myBarApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.myBar],
  endpoints: builder => ({
    getMyBar: builder.query<IIngredient[], void>({
      query() {
        return {
          url: `${MY_BAR_LIST_URL}`,
        };
      },
      transformResponse: (result: IBarResponse) => result.list,
      providesTags: [TAGS_TYPES.myBar],
    }),

    addToBar: builder.mutation<IBarResponse, string>({
      query: ingredientId => ({
        url: `${MY_BAR_LIST_URL}`,
        method: 'POST',
        body: { id: ingredientId },
      }),
      invalidatesTags: [TAGS_TYPES.myBar],
    }),

    deleteFromBar: builder.mutation<IBarResponse, string>({
      query: ingredientId => ({
        url: `${MY_BAR_LIST_URL}/${ingredientId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.shopping],
    }),
  }),
});

export const {
  useGetMyBarQuery,
  useAddToBarMutation,
  useDeleteFromBarMutation,
} = myBarApi;
