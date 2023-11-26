import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app.slice'
import authSlice from './slices/auth.slice'

const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
