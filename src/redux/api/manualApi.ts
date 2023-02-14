import { createApi } from '@reduxjs/toolkit/query/react';
import { ICategory, IGlass } from 'types/manual';
import baseQuery from 'redux/baseQuery';
import { CATEGORY_URL, GLASSES_URL, TAGS_TYPES } from 'constants/api';

export const manualApi = createApi({
  reducerPath: 'manualApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.categories, TAGS_TYPES.glasses],
  keepUnusedDataFor: 30000,
  endpoints: builder => ({
    getCategories: builder.query<ICategory, void>({
      query() {
        return {
          url: `${CATEGORY_URL}`,
        };
      },
      providesTags: [TAGS_TYPES.categories],
    }),
    getGlasses: builder.query<IGlass[], void>({
      query() {
        return {
          url: `${GLASSES_URL}`,
        };
      },
      providesTags: [TAGS_TYPES.glasses],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetGlassesQuery } = manualApi;
