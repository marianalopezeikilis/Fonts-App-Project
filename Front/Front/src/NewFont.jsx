import React from "react";
import "./App.css";
import ButtonBlue from "./components/ButtonBlue";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import NavBar from "./components/NavBar";


function NewFont() {
    return (
        <div>
            <NavBar />
            <Container fluid className="containerhome">
                <Row className="justify-content-center">
                    <Col className='colhome'>
                        <div class="add_position">
                            <h1>Nueva fuente</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre de la fuente nueva" />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Foto</Form.Label>
                                    <Form.Control type="file" name="file"/>
                                </Form.Group>
                                <ButtonBlue text="Agregar fuente" ruta="/fuentes" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewFont;




