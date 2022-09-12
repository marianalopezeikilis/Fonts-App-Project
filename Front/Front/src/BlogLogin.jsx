import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import './App.css'
import { Form, Container, Row, Col } from 'react-bootstrap';

function BlogLogin() {

  return (
    <div class="background_blog">
      <NavBar />
      <Container className="d-none d-md-block">
        <div class="background_login_web" >
          <Row className="justify-content-center">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label class="login_text_color">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label class="login_text_color">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <ButtonBlue text="Login" ruta="/add" />
            </Form>
          </Row>
        </div>
      </Container>
      <Container className="d-md-none">
        <div class="background_login" >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label class="login_text_color">Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label class="login_text_color">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <ButtonBlue text="Login" ruta="/add" />
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default BlogLogin