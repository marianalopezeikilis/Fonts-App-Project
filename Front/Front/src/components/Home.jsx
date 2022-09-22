import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlue from "./ButtonBlue";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Container fluid className="containerhome">
      <Row className="justify-content-center">
        <Col xs="2" md="2" lg="4" className="colhome">
         <div className='d-flex logo'> <h1 className="h1home"> Water care </h1>
        <img className="imgagua" src="/img/logo02.png" /></div>
          
          <p className="texthome">
            {" "}
            Descubre las novedades medioambientales en nuestro blog y encuentra
            las fuentes cercanas a ti para disfrutar del agua potable de acceso
            público y contribuir al mismo tiempo a nuestro planeta.
          </p>

          <ButtonBlue text="Noticias" ruta="/blog" />
          <br className="d-xl-none"/>
          <ButtonBlue text="Fuentes" ruta="/fuentes" />
          
        </Col>
      </Row>
{/* <Row> <Col>       
          <div className="d-none d-xl-block divweb"> 
Este div es para pantalla grande  
</div></Col></Row> */}


    </Container>
   

  );
}

export default Home;
