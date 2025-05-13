import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cs from './Cs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import Jazz from './Jazz';

const root = document.getElementById('root');
document.title = "JHilla"
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cs" element ={<Cs />} />
      <Route path="/jazz" element ={<Jazz/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
