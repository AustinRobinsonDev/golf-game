import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Game from './components/Game';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import io from 'socket.io-client';
import immer from 'immer';
import useLocalStorage from './custom-hooks/useLocalStorage';

function App() {

  // All app level state
  const [course, setCourse] = useState({
    name: 'Pell City Country Club',
    par: 36,
    length: 9,
    holePar: [4, 5, 3, 4, 3, 5, 4, 4, 4],
    holeLength: [350, 515, 135, 340, 165, 492, 426, 376, 358 ],
    rules: ['Every player must tee-off from a beer can', 'Only drivers and putters on this hole, you may re-tee after first shot',   'Each player must Billy Madison their tee shot', 'Every player is free to distract the person teeing off', 'Every player use the womens tee-box and throw the ball as far as possible for stroke #1', 'Everyone uses their driver to putt on this hole']
  });
  const [username, setUsername] = useState('');
  const [connected, setConnected] = useState(false);
  const [currentGame, setCurrentGame] = useState({ chatName: 'general'});
  const [connectedRooms, setConnectedRooms] = useState('general');
  const [allUsers, setAllUsers] = useState([]);
  const [roundPoints, setRoundPoints] = useState(0);
  const [currentScore, setCurrentScore] = useState();
  const [holeCounter, setHoleCounter] = useState(1);
  const [rndm, setRndm] = useState(0);
  const [socket, setSocket] = useState()
  const [id, setId] = useLocalStorage('yourId');
  const socketRef = useRef();
  let score = 0;

  // All app level functions and socket connections 
  function nextHole (e) {
    socket.emit('next hole', roundPoints, username);
    if (holeCounter <= course.length) {
      setRoundPoints(''); 
      setHoleCounter(holeCounter + 1);
      randomNumber(1, 6);
      updateUserScores(username);
      calculateCurrentScore(username)
      console.log('current score', currentScore);
      console.log('all Users: ', allUsers)
    }
  }

  function displayUserScores(user) {
    const reducer = (previousValue, currentValue) => previousValue += currentValue;
        if(user.score.length === 0) {
          return (
            <div key={user.id}>
              <p className='w-100 d-flex align-items-center pt-2'>{user.username} <br /> Score: 0 <br /> Hole: {user.score.length + 1}</p>
            </div>
          )
        };
        if(user.score.length === 1) {
          return (
            <div key={user.id}>
              <p className='w-100 d-flex align-items-center pt-2'>{user.username} <br /> Score:{user.score[0]} <br /> Hole: {user.score.length + 1}</p>
            </div>
          )
        }
        if(user.score.length >= 2) {
          return (
            <div key={user.id}>
              <p className='w-100 d-flex align-items-center pt-2'>{user.username} <br /> Score:{user.score.reduce(reducer)} <br /> Hole: {user.score.length + 1}</p>
            </div>
          )
        }
  }
    
  const calculateCurrentScore = username => {
    let usersCopy = [...allUsers];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    for(let i = 0; i < usersCopy.length; i++){
      if(usersCopy[i].username === username) {
        if (holeCounter === 1) {
          score = parseInt(roundPoints);
        } else if (holeCounter === 2) {
          score = usersCopy[i].score[0] + usersCopy[i].score[1];
        } 
        score = usersCopy[i].score.reduce(reducer);
      }
    }
    return setCurrentScore(score)
  } 

  function updateUserScores (username) {
    let newUserList = [...allUsers];
    for( let i = 0; i < newUserList.length; i++) {
      if(newUserList[i].username === username) {
        return newUserList[i].score = [...allUsers[i].score, parseInt(roundPoints)];
      }
    }
    setAllUsers(newUserList);
  }

  function randomNumber (min, max) { 
    setRndm(() => {
      return  Math.floor(Math.random() * (max - min) + min);
    }) 
  } 

  function handleChange (e) {
    setUsername(e.target.value);
  }

  function onScoreChange (e) {
    setRoundPoints(e.target.value);
  }

  function joinRoom (room) {
    const newConnectedRooms = immer(connectedRooms, draft => {
      draft.push(room);
    })
    socket.emit('join room', room);
    setConnectedRooms(newConnectedRooms);
  }

  function connect () {
    setConnected(true);
    socket.current = io.connect("/");
    socket.current.emit('connection');
    socket.current.emit('join server', username);
    socket.current.emit('join room', "general", allUsers);
    socket.current.on('new user', allUsers => {
      setAllUsers(allUsers);
    });
    socket.current.on('next hole', allUsers => {
      setAllUsers(allUsers);
    });
    setRoundPoints('');
    setCurrentScore(0);
    randomNumber(1,6);
  }
  useEffect(() => {
    const newSocket = io(
      'http://localhost:5000',
      { query: { id } }
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id]);

  // Game component
  const game = (
        <Game
        roundPoints={roundPoints}
        yourId={socketRef.current ? socketRef.current.id : ''}
        allUsers={allUsers}
        joinRoom={joinRoom}
        connectedRooms={connectedRooms}
        displayUserScores={displayUserScores}
        currentGame={currentGame}
        course={course}
        onScoreChange={onScoreChange}
        randomNumber={randomNumber}
        currentScore={currentScore}
        nextHole={nextHole}
        random={rndm}
        holeCounter={holeCounter}
        setUsers={setAllUsers}
        calculateCurrentScore={calculateCurrentScore}
         />
  )

  // Login component
  const login = (
        <Login 
        onSubmitId={setId}
        connect={connect} 
        username={username}
        onChange={handleChange}
        />
  )
  return (
    <div className='app w-100'>
    <MainNavbar />
      {id ? game : login}
    <Footer />
    </div>
  );
}

export default App;
