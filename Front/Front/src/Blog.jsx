import NavBar from "./components/navbar.jsx";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



function Blog() {
  const [dades, setDades] = useState([]);
  const [error, setError] = useState("");
  const [num, setNum] = useState(0);
  //Funcion para conectar con la api

  function loadData() {
    fetch("http://localhost:3000/api/news")
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


  const lista = dades.map((el) => (
    <div key={el.id}>
      <style type="text/css">
      {`
        .btn-celeste {
          background-color: #93BFD7;
          color: white;
          margin:5px;
          width: 100%;
          max-width: 150px;
          box-sizing: border-box;
          box-shadow: 2px 2px 5px #888888;
          border:none;
        }
        .btn-celeste:hover {
          background-color: #39A2DB;  
          border:none;
          color: white;
        }
    `}
      </style>
      <Col>
        <Card>
          <Card.Img variant="top" src={"http://localhost:3000/img/" + el.img} />
          <Card.Body>
            <Card.Title>{el.titulo}</Card.Title>
            <Card.Text>
              {el.subtitulo}
            </Card.Text>
            <Link to={`/view/${el.id}`}>
              <Button variant="celeste" size="xl">Ver mas</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  ));


  return (
    <div className="bodyblog">
      
      <div className="background_add_02">
        <NavBar />
        <div className=" containerimg">

          <Row xs={1} md={2}
            xl={(dades.length > 2 ? 4 : 2)} className="g-4 m-0">

            {lista} </Row>
        </div>
      </div>
    </div>
  );
}

export default Blog;
