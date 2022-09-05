import React from 'react'
import '../App.css'
 import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
<div class='divhome vh-100'>
<h1> Fuentes y Cuidado Ambiental </h1>
<img class='imgagua' src='/img/agua.jpg'/>
<br></br>

<br/>
<Button class='btnfuente' variant='success'> Fuentes</Button>
<Button class='btneconews'>EcoNews </Button>
    </div>
  )
}

export default Home         