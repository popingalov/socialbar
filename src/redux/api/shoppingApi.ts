import { IIngredient } from 'types/ingredient.d';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IShoppingResponse } from 'types/response.d.';

import baseQuery from 'redux/baseQuery';
import { SHOPPING_LIST_URL, TAGS_TYPES } from 'constants/api';

export const shoppingApi = createApi({
  reducerPath: 'shoppingApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.shopping],
  endpoints: builder => ({
    getShoppingList: builder.query<IIngredient[], void>({
      query() {
        return {
          url: `${SHOPPING_LIST_URL}`,
        };
      },
      transformResponse: (result: IShoppingResponse) => result.ingredients,
      providesTags: [TAGS_TYPES.shopping],
    }),

    addToShopping: builder.mutation<IShoppingResponse, string>({
      query: ingredientId => ({
        url: `${SHOPPING_LIST_URL}`,
        method: 'POST',
        body: { id: ingredientId },
      }),
      invalidatesTags: [TAGS_TYPES.shopping],
    }),

    deleteFromShopping: builder.mutation<IShoppingResponse, string>({
      query: ingredientId => ({
        url: `${SHOPPING_LIST_URL}/${ingredientId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.shopping],
    }),
  }),
});

export const {
  useGetShoppingListQuery,
  useAddToShoppingMutation,
  useDeleteFromShoppingMutation,
} = shoppingApi;
