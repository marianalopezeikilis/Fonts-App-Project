import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import './Blog.css'
import { Form } from 'react-bootstrap';

function BlogLogin() {

  return (
    <>
      <NavBar />
      <div class="background_blog">
        <div class="background_login">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <ButtonBlue text="Login" ruta="/add" />
          </Form>
        </div>
      </div>
    </>
  )
}

export default BlogLogin