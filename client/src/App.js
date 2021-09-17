import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import { Container, Row, Navbar } from 'react-bootstrap';
//import Navbar from './components/Navbar'


function App() {
  const [id, setId] = useState();
  return (
    <div className='app'>
    <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">Golf, Uht!</Navbar.Brand>
  </Container>
</Navbar>
    {/* <Navbar /> */}
    {id}
    {/* <Login onIdSubmit={setId}/> */}
    <Game />
    </div>
  );
}

export default App;
