import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IIngredient } from 'types/ingredient';

import { INewIngredient, IUpdateIngredient } from 'types/newIngredient';

import { INGREDIENT_URL, TAGS_TYPES } from 'constants/api';
import { RootState } from 'redux/store';

export const ingredientApi = createApi({
  reducerPath: 'ingredientApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.ingredients],
  endpoints: builder => ({
    fetchIngredients: builder.query<IIngredient[], void>({
      async queryFn(_arg, { getState }, _extraOptions, fetchWithBQ) {
        const { data: defaultIngredients, error: defaultRequestError } =
          await fetchWithBQ(`${INGREDIENT_URL}`);
        if (defaultRequestError)
          return {
            error: defaultRequestError as FetchBaseQueryError,
          };

        const isAuth = (getState() as RootState).auth.isAuth;

        if (isAuth) {
          const { data: myIngredients, error: privateRequestError } =
            await fetchWithBQ(`${INGREDIENT_URL}/my`);
          if (privateRequestError) {
            return { error: privateRequestError as FetchBaseQueryError };
          }

          (defaultIngredients as IIngredient[]).push(
            ...(myIngredients as IIngredient[]),
          );
        }
        return {
          data: defaultIngredients as IIngredient[],
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: TAGS_TYPES.ingredients,
                id,
              })),
              { type: TAGS_TYPES.ingredients, id: 'LIST' },
            ]
          : [{ type: TAGS_TYPES.ingredients, id: 'LIST' }],
    }),

    getIngredientById: builder.query<IIngredient, string>({
      query(id) {
        return {
          url: `${INGREDIENT_URL}/${id}`,
        };
      },
      providesTags: (result, error, id) => [
        { type: TAGS_TYPES.ingredients, id },
      ],
    }),

    addIngredient: builder.mutation<IIngredient, Partial<INewIngredient>>({
      query: newIngredient => ({
        url: `${INGREDIENT_URL}`,
        method: 'POST',
        body: newIngredient,
      }),
      invalidatesTags: [{ type: TAGS_TYPES.ingredients, id: 'LIST' }],
    }),

    updateIngredient: builder.mutation<IUpdateIngredient, any>({
      query: ({ id, ...ingredient }) => ({
        url: `${INGREDIENT_URL}/${id}`,
        method: 'PUT',
        body: ingredient,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: TAGS_TYPES.ingredients, id: arg.id },
      ],
    }),

    deleteIngredient: builder.mutation<IIngredient, string>({
      query: id => ({
        url: `${INGREDIENT_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: TAGS_TYPES.ingredients, id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchIngredientsQuery,
  useGetIngredientByIdQuery,
  useAddIngredientMutation,
  useUpdateIngredientMutation,
  useDeleteIngredientMutation,
} = ingredientApi;
