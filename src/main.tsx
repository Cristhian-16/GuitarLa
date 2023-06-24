import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TiendaContextPage } from './context/TiendaContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TiendaContextPage>
      <App />
    </TiendaContextPage>
  </React.StrictMode>
);
