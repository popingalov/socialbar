import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { configureStore } from "@reduxjs/toolkit";
import { startTest } from './apis/operation'

const store = configureStore({
	reducer: {
				[startTest.reducerPath]: startTest.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(startTest.middleware),
});

// enable listener behavior for the store

setupListeners(store.dispatch);

export default store