import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-loading-skeleton/dist/skeleton.css'
import './general-styles.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
