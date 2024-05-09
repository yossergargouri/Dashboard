import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/userContext';
import { FilterProvider } from './context/searchContext';
import './css/style.css';
import './css/satoshi.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
