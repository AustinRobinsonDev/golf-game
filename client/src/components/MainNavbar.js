import React from 'react';
import { Container, Navbar, NavDropdown, Nav, Link} from 'react-bootstrap';
import { FaGolfBall } from 'react-icons/fa';


const MainNavbar = () => {
    return (
  <Navbar bg="light" expand="lg" className='d-flex align-items-center'>
    <Container className='d-flex align-items-center'>
      <Navbar.Brand style={{color: 'black'}} href="#">Golf Game<FaGolfBall className='text-warning' style={{fontSize: '25px'}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls=" basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">How to Play</Nav.Link>
          <NavDropdown title="Other" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default MainNavbar
