import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';
import { IIngredient } from 'types/ingredient';
import { INGREDIENT_URL, TAGS_TYPES } from 'constants/api';

export const ingredientApi = createApi({
  reducerPath: 'ingredientApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.ingredients],
  endpoints: builder => ({
    fetchIngredients: builder.query<IIngredient[], void>({
      query() {
        return {
          url: `${INGREDIENT_URL}`,
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

    addIngredient: builder.mutation<IIngredient, Partial<IIngredient>>({
      query: newIngredient => ({
        url: `${INGREDIENT_URL}`,
        method: 'POST',
        body: newIngredient,
      }),
      invalidatesTags: [{ type: TAGS_TYPES.ingredients, id: 'LIST' }],
    }),

    updateIngredient: builder.mutation<
      IIngredient,
      Partial<IIngredient> & Pick<IIngredient, 'id'>
    >({
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
