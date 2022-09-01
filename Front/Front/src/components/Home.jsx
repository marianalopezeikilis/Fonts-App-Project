import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
<div>
<h1> Nombre de la App</h1>
<img class='imgagua' src='/img/agua.jpg'/>
<br></br>
<Button class='btnfuente' variant='success'> Fuentes</Button>
<Button class='btneconews'>EcoNews </Button>
    </div>
  )
}

export default Home         