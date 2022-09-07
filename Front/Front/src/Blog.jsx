import NavBar from "./components/navbar.jsx";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./App.css"
import { useState } from "react";

function Blog() {
  const [titulo, setTitulo] = useState("");
  const [articulo, setArticulo] = useState("");
  const [dades, setDades] = useState([]);
  const [error, setError] = useState("");


  function loadData() {
    fetch("http://localhost:3000/api/news")
      .then(result => result.json())
      .then(object_returned => {
        if (object_returned.ok === true) {
          setDades(object_returned.data);
        } else {
          setError(object_returned.error)
        }
      })
      .catch(error => setError(error))
  }

  function elimina(id) {
    console.log("Nos borrar el siguiente id " + id);

    fetch("http://localhost:3000/api/news/" + id,
      {
        method: "DELETE",
      })
      .then(res => loadData())
      .catch(err => console.log("error: ", err))

  }



  function desar(e) {

    e.preventDefault();
    const news = {
      titulo: titulo,
      articulo: articulo

    }

    fetch("http://localhost:3000/api/news",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(news)
      })
      .then(res => loadData())
      .catch(err => console.log("error: ", err))

  }


  useEffect(() => {

    loadData();

  }, [])


  if (error !== "") {
    return <h3>Error: {error} </h3>
  }

  if (dades.length === 0) {
    return <h3>No hi ha dades</h3>
  }

  const lista = dades.map(el => <li key={el.id}>{el.titulo {el.articulo} <button onClick={() => elimina(el.id)}>X</button></li>);




  return (
    <div className="bodyblog">
      <NavBar />
      <div className="d-none d-xl-block"><Button href="login">Login</Button></div>



      <Row xs={1} md={4} className="g-4 m-0">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/img/blog.jpg" />
              <Card.Body>
                <Card.Title>Mbappé se ríe del cambio climático mientras Francia se plantea prohibir los vuelos privados</Card.Title>
                <Card.Text>
                  El delantero y el entrenador del PSG ironizan con l aposibilidad de viajar «en barco de vela» su próximo desplazamiento tras ser preguntados por su viaje en avión a Nantes
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>

  )
}

export default Blog