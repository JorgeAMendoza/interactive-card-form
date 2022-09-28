import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardDisplayProvider } from './context/CardDisplayContext';
import App from './App';
import GlobalStyles from './styles/Global.styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <CardDisplayProvider>
      <App />
    </CardDisplayProvider>
  </React.StrictMode>
);
