import {useState} from "react";
import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import InputBlue from "./components/InputBlue";
import './App.css'
import { Form, Container, Row, Col } from 'react-bootstrap';
import ImageUpload from "./ImageUpload.jsx";

function BlogAdd() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, settext] = useState('');
  const [img, setImg] = useState(null);

  return (
    <div class="background_blog">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs="10" md="10" lg="8" >
            <div class="add_position">
              <h1>New Post</h1>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label class="add_text_color">Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label class="add_text_color">Subtitle</Form.Label>
                  <Form.Control type="text" placeholder="Subtitle" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label class="add_text_color">Text</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                
                <ImageUpload useFoto={[img, setImg]} />
              </Form>
              <div class="button_add_position">  <ButtonBlue text="Add" ruta="/blog" /></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogAdd