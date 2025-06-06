import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Context } from './Context';

function Navigation() {

  const {cart} = useContext(Context);

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fw-bolder text-primary fst-italic'>Pizza-Wala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart{cart.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;