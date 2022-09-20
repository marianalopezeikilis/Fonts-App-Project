import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import './App.css'
import { Form, Container, Row, Col } from 'react-bootstrap';

function BlogLogin() {

  return (
    <div className="background_blog">
      <NavBar />
      <Container fluid className="containerhome">
          <Row className="justify-content-center">
          <Col xs="2" md="2" lg="4" className="colhome background_login_web">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="login_text_color">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label class="login_text_color">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <ButtonBlue text="Login" ruta="/add" />
            </Form>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default BlogLogin