import NavBar from "./components/navbar.jsx";
import { Button } from 'react-bootstrap';

function BlogLogin() {

  return (
    <>
        <NavBar/>
        <h1>Login</h1>
        <Button href="add">Login</Button>
    </>
  )
}

export default BlogLogin