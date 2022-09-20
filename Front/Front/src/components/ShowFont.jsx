import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlue from "./ButtonBlue";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import '../ShowFont.css';
import { useState } from "react";

function ShowFont() {

  const EV = '/img/estrellavacia.png';
  const EL = '/img/estrellallenanegraredonda.png';
  const [e1, setE1] = useState(EV);
  const [e2, setE2] = useState(EV);
  const [e3, setE3] = useState(EV);
  const [e4, setE4] = useState(EV);
  const [e5, setE5] = useState(EV);

function rankear(x){
console.log('ranking',x);

}


  function rechange(){
    setE1(EV);
    setE2(EV);
    setE3(EV);
    setE4(EV);
    setE5(EV);
    
  }

function change1() {
 setE1(EL);
}
function change2() {
  setE1(EL);
  setE2(EL);
 }
 function change3() {
  setE1(EL);
  setE2(EL);
  setE3(EL);
 }
 function change4() {
  setE1(EL);
  setE2(EL);
  setE3(EL);
  setE4(EL);
 }
 function change5() {
  setE1(EL);
  setE2(EL);
  setE3(EL);
  setE4(EL);
  setE5(EL);
 }


  return (
    <div>
  
<Container fluid className="containerhome">
    <Row className="justify-content-center">
   <Col className='colhome'>
<form>

<div class="form-row">
<div class="form-group ">
    <label for="inputNombre">Nombre de la fuente</label>  <p>4,5 </p> <img className='imgEstrella' src='/img/estrellallena.png'/>
    <input type="text" class="form-control inputFuente" id="inputNombre" placeholder="Personaliza el nombre de la fuente"/>
  
  </div>
</div>

<img className='imgFuente' src='/img/fuente.jpeg'/> 
<br></br>

<div className='ranking'> 
<img className="imgEstrella" onMouseOver={change1} onMouseLeave={rechange} onClick={()=>rankear(1)} src={e1}/>
<img className="imgEstrella"  onMouseOver={change2} onMouseLeave={rechange} onClick={()=>rankear(2)} src={e2}/>
<img className="imgEstrella" onMouseOver={change3}onMouseLeave={rechange} onClick={()=>rankear(3)} src={e3}/>
<img className="imgEstrella" onMouseOver={change4} onMouseLeave={rechange} onClick={()=>rankear(4)} src={e4}/>
<img className="imgEstrella" onMouseOver={change5} onMouseLeave={rechange} onClick={()=>rankear(5)} src={e5}/>

</div>
</form>
   </Col>
    </Row>
</Container>



   </div>
  )
}

export default ShowFont




