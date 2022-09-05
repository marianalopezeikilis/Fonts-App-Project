import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsArrowLeftShort, BsPlusLg} from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const btn_style = { color: "E8F0F2", fontSize: "35px"}
  const btn_style02 = { color: "93BFD7", fontSize: "19px", marginTop: "-5px", marginRight: "5px"}
  const btn_style03 = { color: "E8F0F2", fontSize: "19px", marginTop: "-5px", marginRight: "5px"}

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
          <Nav.Link href=" "><BsArrowLeftShort style={btn_style}/></Nav.Link>
        </Nav>
        <Nav className="m-auto">
          <Navbar.Brand href=" ">
            <img
              src="/img/logo01.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Nav>
        <Nav className="mr-auto">{
          window.location.pathname.includes("blog")?
          <Nav.Link href="login"><BsPlusLg style={btn_style03}/></Nav.Link>:
          <Nav.Link><BsPlusLg style={btn_style02}/></Nav.Link>
        }
        </Nav>
      </Container>
    </Navbar>

  </>)
}

export default NavBar;