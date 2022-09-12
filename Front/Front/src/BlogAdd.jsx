import { useState } from "react";
import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import InputBlue from "./components/InputBlue";
import './App.css'
import { Form, Container, Row, Col } from 'react-bootstrap';
import ImageUpload from "./ImageUpload.jsx";

function BlogAdd() {

  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [articulo, setArticulo] = useState('');
  const [img, setImg] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('titulo', titulo);
    data.append('subtitulo', subtitulo);
    data.append('articulo', articulo);
    data.append('file', img);

    const opciones = {
      method: 'POST',
      body: data
    };

    fetch("http://localhost:3000/api/news", opciones)
      .then(res => res.json())
      .then(res => {
        if (res.ok === true) {
          //toast.success("Article afegit");
        } else {
          console.log(res);
          //toast.error("Error: " + res.error);
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  }


  return (
    <div class="background_blog">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs="10" md="10" lg="8" >
            <div class="add_position">
              <h1>New Post</h1>
              <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label class="add_text_color">Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" value={titulo} onInput={(e) => setTitulo(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label class="add_text_color">Subtitle</Form.Label>
                  <Form.Control type="text" placeholder="Subtitle" value={subtitulo} onInput={(e) => setSubtitulo(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label class="add_text_color">Text</Form.Label>
                  <Form.Control as="textarea" rows={6} value={articulo} onInput={(e) => setArticulo(e.target.value)} />
                </Form.Group>
                <ImageUpload useFoto={[img, setImg]} />
                <button type="submit">{"Add"}</button>
                {/*He canvait el Button Blue per un button normal per fer proves en el  uw hi havia text="Add" ruta="/blog"*/}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogAdd