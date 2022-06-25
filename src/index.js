import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlanetContextProvider } from './context/PlanetContext';
import {  BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlanetContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </PlanetContextProvider>
    
  </React.StrictMode>
);


