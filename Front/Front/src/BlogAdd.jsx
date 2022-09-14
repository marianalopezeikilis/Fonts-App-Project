import NavBar from "./components/navbar.jsx";
import './App.css'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import ImageUpload from "./ImageUpload.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { useState} from "react"; 

function BlogAdd() {

  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [articulo, setArticulo] = useState('');
  const [img, setImg] = useState(null);

  const navigateTo = useNavigate();

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
          navigateTo("/blog")
        } else {
          console.log(res);
          //toast.error("Error: " + res.error);
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  }


  return (
    <div class="background_blog">
      <style type="text/css">
        {`
          .btn-celeste {
            background-color: #93BFD7;
            color: white;
            padding-left:70px;
            padding-right:70px;
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
      <div class="background_add_02">
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
                  <div class="button_add_center">
                    <Button type="submit" variant="celeste">{"Add"}</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BlogAdd;