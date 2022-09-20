import NavBar from "./components/navbar.jsx";
import './App.css'
import { Form, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogView() {
    const [dades, setDades] = useState([]);
    const [error, setError] = useState("");
    const [num, setNum] = useState(0);
    //Funcion para conectar con la api
    const { id } = useParams();
    function loadData() {
        fetch("http://localhost:3000/api/news/" + id)
            .then((resultat) => resultat.json())
            .then((objecte_retornat) => {
                if (objecte_retornat.ok === true) {
                    setDades(objecte_retornat.data);
                } else {
                    setError(objecte_retornat.error);
                }
            })
            .catch((error) => setError(error));
    }

    useEffect(() => {
        loadData();
    }, []);

    if (error !== "") {
        return <h3>Error: {error.message} </h3>;
    }

    if (dades.length === 0) {
        return <h3>No hi ha dades</h3>;
    }

    return (
        <div className="background_blog">
            <NavBar />
            <div className="background_add_02">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="10" md="10" lg="8" >
                            <div className="add_position">
                                <img className="blog_img" src={"http://localhost:3000/img/" + dades.img}/>
                                <h1>{dades.titulo}</h1>
                                <h4 className="view_text">{dades.subtitulo}</h4>
                                <p className="view_text">{dades.articulo}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BlogView