<<<<<<< HEAD
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { startTest } from './apis/startTest';

const store = configureStore({
  reducer: {
    [startTest.reducerPath]: startTest.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(startTest.middleware),
=======
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { configureStore } from "@reduxjs/toolkit";
import { startTest } from './apis/operation'

const store = configureStore({
	reducer: {
				[startTest.reducerPath]: startTest.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(startTest.middleware),
>>>>>>> 0cbca7580b54f01debee5c921fe5ca9ce0dfd0d5
});

// enable listener behavior for the store

setupListeners(store.dispatch);

export default store;