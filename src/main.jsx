import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
