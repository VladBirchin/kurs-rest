import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../store/servicesSlice';

export const store = configureStore({
    reducer: {
        services: servicesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;  // Це правильно!
export type AppDispatch = typeof store.dispatch;
