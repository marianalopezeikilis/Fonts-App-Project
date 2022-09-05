import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Blog from "./Blog";
import BlogLogin from "./BlogLogin";
import BlogAdd from "./BlogAdd";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<BlogLogin />} />
      <Route path="add" element={<BlogAdd />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
