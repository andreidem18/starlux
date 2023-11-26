import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean,
  notification: string,
}

const initialState: AppState = {
  isLoading: false,
  notification: '',
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setNotification: (state, action: PayloadAction<string>) => {
      state.notification = action.payload;
    },
  },
})

export const { setIsLoading, setNotification } = appSlice.actions;

export default appSlice.reducer
