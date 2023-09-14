import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store} >
        <GoogleOAuthProvider clientId="977337629372-7p8sh4gb1h5jtrlggt9v1dehs8nbb7qh.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>;
      </Provider>
  );