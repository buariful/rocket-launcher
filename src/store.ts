import rocketReducer from './Features/rocket/rocketSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { allLaunchesApi } from './Features/api';

export const store = configureStore({
    reducer: {
        rocket: rocketReducer,
        [allLaunchesApi.reducerPath]: allLaunchesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allLaunchesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;










