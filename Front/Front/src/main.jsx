import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import Blog from "./Blog";
import BlogLogin from "./BlogLogin";
import BlogAdd from "./BlogAdd";
import Map from "./components/map"; 
import Loading from "./components/Loading"; 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="home" element={<App />}/>
      <Route path="blog" element={<Blog />} />
      <Route path="login"  element={<BlogLogin />} />
      <Route path="add" element={<BlogAdd />} />
      <Route path="fuentes" element={<Map />}/>
      <Route path="loading" element={<Loading />}/>
      {/*<Route path="font" element={<Font />}/> Visualizacion de la fuente, se canvia el elemento depende del nombre*/}
      {/*<Route path="new" element={<New />}/>  Nueva fuente, se canvia el elemento depende del nombre*/}
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
