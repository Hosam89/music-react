import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { ShazamCoreApi } from './services/shazamCore';
export const store = configureStore({
  reducer: {
    [ShazamCoreApi.reducerPath] : ShazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultmiddleware) => getDefaultmiddleware().concat(ShazamCoreApi.middleware),
});
