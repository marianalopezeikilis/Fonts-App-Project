import React from "react";
import "./App.css";
import ButtonBlue from "./components/ButtonBlue";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import NavBar from "./components/NavBar";


function NewFont() {
    return (
        <div>
            <NavBar/>
            <Container fluid className="containerhome">
                <Row className="justify-content-center">
                    <Col className='colhome'>
                        <div class="add_position">
                            <h1>New Font</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>New font's Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <ButtonBlue text="Add Font" ruta="/fuentes" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default NewFont;




