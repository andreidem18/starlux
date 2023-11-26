import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../interfaces/User';
import axios from '../../utils/axios';
import { setIsLoading } from './app.slice';

interface AuthState {
  isLogged: boolean;
  loggedUser: User | null;
  token: string;
}

const initialState: AuthState = {
  isLogged: false,
  loggedUser: null,
  token: localStorage.getItem('token') || '', 
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setLoggedUser: (state, action: PayloadAction<User>) => {
      state.loggedUser = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.token = '';
      localStorage.setItem('token', '');
      state.loggedUser = null;
      state.isLogged = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoggedUser.fulfilled, (state, action) => {
        state.isLogged = true;
        state.loggedUser = action.payload;
      })
  }
});

export const { setIsLogged, setLoggedUser, setToken, logout } = counterSlice.actions;

export const fetchLoggedUser = createAsyncThunk('auth/fetchLoggedUser', async (_, { dispatch }) => {
  dispatch(setIsLoading(true));
  try {
    const res = await axios.get<User>('/users/myself/');
    return res.data;
  } finally {
    dispatch(setIsLoading(false));
  }
});

export default counterSlice.reducer
