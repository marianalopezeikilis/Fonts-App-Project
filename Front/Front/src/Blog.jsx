import NavBar from "./components/navbar.jsx";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./App.css"
import ButtonBlue from "./components/ButtonBlue";
import './Blog.css'
<<<<<<< HEAD
import ButtonBlue from "./components/ButtonBlue";
import './Blog.css'

=======
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./App.css"
import {Link} from 'react-router-dom';
>>>>>>> b9658cffe41acbaa5591ac482b891c18ef6a779f

function Blog() {

  return (
<<<<<<< HEAD
    <>
      <NavBar />
      <div class="background_blog">
        <div className="d-none d-xl-block"><ButtonBlue text="Add" ruta="/login" /></div>
        
      </div>
    </>
=======
    <div className="bodyblog">
        <NavBar/>
        <div className="d-none d-xl-block"><Button href="login">Login</Button></div>



    <Row xs={1} md={4} className="g-4 m-0">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/blog.jpg"  />
            <Card.Body>
              <Card.Title>Mbappé se ríe del cambio climático mientras Francia se plantea prohibir los vuelos privados</Card.Title>
              <Card.Text>
              El delantero y el entrenador del PSG ironizan con l aposibilidad de viajar «en barco de vela» su próximo desplazamiento tras ser preguntados por su viaje en avión a Nantes <Link to="/api/news/:id"><button>Ver mas</button> </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>

>>>>>>> b9658cffe41acbaa5591ac482b891c18ef6a779f
<div className="bodyblog">
{/*} 
Esta class està en blog.css
<div class="background_blog">{*/}
<NavBar/>
<div className="d-none d-xl-block"><ButtonBlue text="Add" ruta="/login" /></div>



<Row xs={1} md={4} className="g-4 m-0">
{Array.from({ length: 4 }).map((_, idx) => (
<Col>
  <Card>
    <Card.Img variant="top" src="/img/blog.jpg"  />
    <Card.Body>
      <Card.Title>Mbappé se ríe del cambio climático mientras Francia se plantea prohibir los vuelos privados</Card.Title>
      <Card.Text>
      El delantero y el entrenador del PSG ironizan con l aposibilidad de viajar «en barco de vela» su próximo desplazamiento tras ser preguntados por su viaje en avión a Nantes <Link to="/api/news/:id"><button>Ver mas</button> </Link>
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