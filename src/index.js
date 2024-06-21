import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import create from './services/create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route  element={<App/>} path="/"/>
    <Route  element={<create/>} path="/create"/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


