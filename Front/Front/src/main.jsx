import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Blog from "./Blog";
import BlogLogin from "./BlogLogin";
import BlogAdd from "./BlogAdd";
import Map from './Map';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="home" element={<App />}/>
      <Route path="fuentes" element={<Map />}/>
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<BlogLogin />} />
      <Route path="showfont" element={<ShowFont />} />
      <Route path="add" element={<BlogAdd />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
