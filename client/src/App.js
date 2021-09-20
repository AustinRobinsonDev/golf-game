import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import { useLocalStorage } from './custom-hooks/useLocalStorage';
import { PlayersProvider } from './context/PlayersProvider';
import { SocketProvider } from './context/SocketProvider';


function App() {
  const [id, setId] = useLocalStorage();

  const game = (
    <SocketProvider id={id}>
      <PlayersProvider id={id}>
        <Game id={id} />
      </PlayersProvider>
    </SocketProvider>
  )
  return (
    <div className='app w-100'>
    <MainNavbar />
      {id ? game : <Login onIdSubmit={setId}/>}
    <Footer />
    </div>
  );
}

export default App;
