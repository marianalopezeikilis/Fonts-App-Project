import NavBar from "./components/navbar.jsx";
import { Button } from 'react-bootstrap';


function Blog() {

  return (
    <>
        <NavBar/>
        <div className="d-none d-xl-block" class="background_blog"><Button href="login">Login</Button></div>
    </>
  )
}

export default Blog