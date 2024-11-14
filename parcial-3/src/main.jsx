
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';  // Asegúrate de que este archivo exporte correctamente el store de Redux
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Pasamos el store como prop al Provider */}
    <App />
  </Provider>
);
