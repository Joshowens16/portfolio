import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import viewReducer from './viewSlice';
const store = configureStore({
  reducer: {
    viewMode: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
