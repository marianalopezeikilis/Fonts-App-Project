import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlue from "./ButtonBlue";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

function ShowFont() {
  return (
    <div>
    
    <Container fluid className="forms containerhome">
      {/* <Row className="justify-content-center"> */}
        {/* <Col xs="2" md="2" lg="4" className="colhome"> */}
        
    <div> <Form.Label className='title-form'>Nombre de la fuente</Form.Label>
    <Form.Control type="email" placeholder="" /></div>
        {/* </Col> */}
      {/* </Row> */}



    </Container>
   </div>
  )
}

export default ShowFont




