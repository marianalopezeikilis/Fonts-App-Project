import React from "react";
import "../App.css";

function Loading() {
  return (
    <div className="containerhome containerloading">

<h1 className='d-block'>Cargando</h1>      


      <img 
        src="/img/logo02.png"
        width="300"
        height="300"
        className="d-inline-block align-top img_loading"
        alt="React Bootstrap logo"
      />
    </div>
  );
}

export default Loading;
