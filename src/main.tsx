import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_API_TOKEN}`}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
