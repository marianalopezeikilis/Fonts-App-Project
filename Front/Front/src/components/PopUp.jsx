import '../App.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';

function PopUp({setPopup}) {


    return (
        <>
            <style type="text/css">
                {`
                .btn-celeste {
                  background-color: #93BFD7;
                  color: white;
                  margin-bottom:10px;
                  margin-top:-10px;
                  box-sizing: border-box;
                  box-shadow: 2px 2px 5px #888888;
                  border:none;
                  padding-top: 2px;
                  padding-bottom: 2px;

                }
                .btn-celeste:hover {
                  background-color: #39A2DB;  
                  border:none;
                  color: white;
                }
  
                `}
            </style>
                <div className="pop_up">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12">
                                <h1>AÑADIR FUENTE</h1>
                                <hr></hr>
                                <p>Marca donde está la fuente a añadir.</p>
                                <Button variant="celeste" onClick={() => setPopup(true)}>Salir</Button>
                            </Col>
                        </Row>

                    </Container>
                </div>
        </>
    );
}

export default PopUp;