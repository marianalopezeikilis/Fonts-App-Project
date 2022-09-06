import NavBar from "./components/navbar.jsx";
import { Button } from 'react-bootstrap';


function Blog() {

  return (
    <>
        <NavBar/>
        <div className="d-none d-xl-block"><Button href="login">Login</Button></div>
    </>
  )
}

export default Blog