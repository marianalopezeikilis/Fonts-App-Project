import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Blog from "./Blog";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
