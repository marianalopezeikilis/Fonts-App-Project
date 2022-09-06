import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsArrowLeftShort, BsPlusLg } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const btn_style = { color: "E8F0F2", fontSize: "35px"}
  const btn_style03 = { color: "E8F0F2", fontSize: "19px", marginTop: "-5px", marginRight: "5px"}

  const goTo = (x) => {
    navigateTo(x)
  }
  return (<>
    <style type="text/css">
      {`
    .navbar-newcolor {
      background-color: #93BFD7;
      color: #E8F0F2;
      padding: 0px;
    }
    `}
    </style>
    <Navbar variant="newcolor">
      <Container>
        <Nav className="ml-auto">
          {/*}<Button type="button" onClick={() => goTo('/llista')}</Button>
            {*/}
          <Nav.Link href="#home"><BsArrowLeftShort style={btn_style}/></Nav.Link>
        </Nav>
        <Nav className="m-auto">
          <Navbar.Brand href="#home">
          <Link to="/">
           <img
              src="/img/logo01.png"

              
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Link>
          </Navbar.Brand>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link onClick={() =>goTo('/BlogLogin')}><BsPlusLg style={btn_style03}/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  </>)
}

export default NavBar;