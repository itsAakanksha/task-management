import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// Combine reducers if you have more in the future
const rootReducer = {
  todo: todoReducer,
};

// Configure the Redux store with the root reducer
export const store = configureStore({
  reducer: rootReducer,
});

// Export types for the RootState and AppDispatch to be used in your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
