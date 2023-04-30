import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import Conetextprovider from './context/context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Conetextprovider>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Conetextprovider>
  
  </React.StrictMode>
);

