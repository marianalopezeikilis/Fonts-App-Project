import React from 'react'
import '../App.css'
 import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBlue from './ButtonBlue';
import Container from 'react-bootstrap/Container';



function Home() {
  return (
<Container fluid className='conthome'>
<div className='contconthome'>
<h1 className="h1home"> Water care </h1>
<img className='imgagua' src='/img/logo02.png'/>
<br/>
<p className='texthome'> Descubre las novedades medioambientales en nuestro blog y encuentra las fuentes cercanas a ti para disfrutar del agua potable de acceso público y contribuir al mismo tiempo a nuestro planeta.</p>

{/* <Button className='btnfuente'> Fuentes</Button>
<Button className='btneconews'>EcoNews </Button> */}
<ButtonBlue text='Blog' ruta='blog' />
<br/>
<ButtonBlue text='Fuentes' ruta='fuentes'/>
    </div>
  
    </Container>
  )
}

export default Home         