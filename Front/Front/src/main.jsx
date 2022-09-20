import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Blog from "./Blog";
import BlogLogin from "./BlogLogin";
import BlogAdd from "./BlogAdd";
import BlogView from "./BlogView";
import Map from "./components/map"; 
import ShowFont from './ShowFont';
import NewFont from './NewFont';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="home" element={<App />}/>
      <Route path="blog" element={<Blog />} />
      <Route path="login"  element={<BlogLogin />} />
      <Route path="add" element={<BlogAdd />} />
      <Route path="fuentes" element={<Map />}/>
      <Route path="view/:id" element={<BlogView />}/>
      <Route path="font" element={<ShowFont />} />
      <Route path="new" element={<NewFont />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
