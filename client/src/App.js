import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import { useLocalStorage } from './custom-hooks/useLocalStorage';
import { PlayersContext, PlayersProvider } from './context/PlayersProvider';


function App() {
  const [id, setId] = useLocalStorage();

  const game = (
    <PlayersProvider>

      <Game id={id} />
    </PlayersProvider>
  )
  return (
    <div className='app w-100'>
    <MainNavbar />

      id ? game : <Login onIdSubmit={setId}/>;
    <Footer />
    </div>
  );
}

export default App;
