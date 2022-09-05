import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (<>
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/img/logo01.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>

  </>)
}

export default NavBar;