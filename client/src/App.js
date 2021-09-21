import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import io from 'socket.io-client';
import immer from 'immer';

function App() {

  const [course, setCourse] = useState({
    name: 'Pell City Country Club',
    par: 36,
    length: 9,
    holePar: [4, 5, 3, 4, 3, 5, 4, 4, 4],
    holeLength: [350, 515, 135, 340, 165, 492, 426, 376, 358 ],
    rules: ['Every player must tee-off from a beer can', 'Only drivers and putters on this hole, you may re-tee after first shot',   'Each player must Billy Madison their tee shot', 'Every player is free to distract the person teeing off', 'Every player use the womens tee-box and throw the ball as far as possible for stroke #1', 'Everyone uses their driver to putt on this hole']
  });
  
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([])
  const [connected, setConnected] = useState(false);
  const [currentGame, setCurrentGame] = useState({ chatName: 'general'});
  const [connectedRooms, setConnectedRooms] = useState('general');
  const [allUsers, setAllUsers] = useState([]);
  const [playerScores, setPlayerScores] = useState([]);
  const [roundPoints, setRoundPoints] = useState(0);
  const [currentScore, setCurrentScore] = useState();
  const [holeCounter, setHoleCounter] = useState(1);
  const [rndm, setRndm] = useState(0);
  const socketRef = useRef();
  let sum = 0;

  function nextHole (e) {
    socketRef.current.emit('next hole', roundPoints)
    if (holeCounter <= 9) {
      if (playerScores[0] === 0) {
        setCurrentScore(roundPoints)
        setPlayerScores([parseInt(roundPoints)]);
      } else{
        setPlayerScores([...playerScores, parseInt(roundPoints)]);
        setCurrentScore(parseInt(currentScore) + parseInt(roundPoints))
      }
      setRoundPoints(''); 
      setHoleCounter(holeCounter + 1);
      randomNumber(1, 6);
    } 

  }

  function randomNumber (min, max) { 
    setRndm(() => {
      return  Math.floor(Math.random() * (max - min) + min);
    }) 
  } 

  function handleScoreChange (e) {
    setPlayerScores(() => playerScores.push(roundPoints))
  }

  function handleChange (e) {
    setUsername(e.target.value);
  }

  function onScoreChange (e) {
    setRoundPoints(e.target.value);
  }

  function toggleChat(currentGame) {
    if(!messages[currentGame.chatName]) {
      const newMessages = immer(messages, draft => {
        draft[currentGame.chatName] = [];
      })
    }
  }

  function roomJoinCallBack (incomingMessages, room) {
    const newMessages = immer(messages, draft => {
      draft[room] = incomingMessages;
    })
    setMessages(newMessages)
  }

  function joinRoom(room) {
    const newConnectedRooms = immer(connectedRooms, draft => {
      draft.push(room);
    })
    socketRef.current.emit('join room', room => roomJoinCallBack(room));
    setConnectedRooms(newConnectedRooms);
  }

  function connect(){
    setConnected(true);
    socketRef.current = io.connect("/");
    socketRef.current.emit('join server', username);
    socketRef.current.emit('join room', "general")
    socketRef.current.on('new user', allUsers => {
      setAllUsers(allUsers)
    });
    setRoundPoints('')
    setCurrentScore(0)
    randomNumber(1,6);
  }

  const game = (
        <Game
        roundPoints={roundPoints}
        handleScoreChange={handleScoreChange}
        yourId={socketRef.current ? socketRef.current.id : ''}
        allUsers={allUsers}
        joinRoom={joinRoom}
        connectedRooms={connectedRooms}
        currentGame={currentGame}
        course={course}
        onScoreChange={onScoreChange}
        randomNumber={randomNumber}
        currentScore={currentScore}
        playerScores={playerScores}
        nextHole={nextHole}
        random={rndm}
        holeCounter={holeCounter}
         />
  )

  const login = (
        <Login 
        connect={connect} 
        username={username}
        onChange={handleChange}
        />
  )
  return (
    <div className='app w-100'>
    <MainNavbar />
      {connected ? game : login}
    <Footer />
    </div>
  );
}

export default App;
