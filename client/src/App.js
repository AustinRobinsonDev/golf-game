import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import { Container} from 'react-bootstrap';
import MainNavbar from './components/MainNavbar'


function App() {
  const [id, setId] = useState();
  return (
    <div className='app w-100'>
    <MainNavbar />
    {id}
    {/* <Login onIdSubmit={setId}/> */}
    <Game />
    </div>
  );
}

export default App;
