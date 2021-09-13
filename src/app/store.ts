import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../features/counterSlice';
import { dogsApiSlice } from '../features/dogsApiSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), dogsApiSlice.middleware];
  },
});

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
