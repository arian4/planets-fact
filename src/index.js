import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlanetContextProvider } from './context/PlanetContext';
import { HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlanetContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
      
    </PlanetContextProvider>
    
  </React.StrictMode>
);


