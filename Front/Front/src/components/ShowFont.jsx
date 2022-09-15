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
    

<Container>
    <Row>
   <Col>
<form>
<div class="form-row">
<div class="form-group col-md-6">
    <label for="inputNombre">Nombre de la fuente</label>
    <input type="text" class="form-control" id="inputNombre" placeholder="Personaliza el nombre de la fuente"/>
  </div>
</div>
</form>
   </Col>
    </Row>
</Container>



   </div>
  )
}

export default ShowFont




