import React, { useState} from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useCourse } from '../context/PlayersProvider'

const Game = ({ id }) => {
    let holeCount = 0;
    const [roundPoints, setRoundPoints] = useState('4');
    const [playerScore, setPlayerScore] = useState(0);
    const [holeCounter, setHoleCounter] = useState(holeCount);
    
    const course = useCourse();

    const onChange = e => {
        e.preventDefault();
        setRoundPoints(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (holeCounter <= 8) {
            setPlayerScore(parseInt(roundPoints) + playerScore);
            setHoleCounter(holeCounter + 1);
            setRoundPoints('4');
        } 
        
    }
    return (
        <Container className="game-wrapper w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh', maxWidth: '500px'}}>
                <Container className='w-100 d-flex m-0 flex-column align-items-center justify-content-center stats'>
                <h1 className='text-center text-white text-shadow mb-5'>Pell City Country Club</h1>
                <p className='text-white text-shadow-light'>Your room ID: {id}</p>
                    <div className='z-index-0 d-flex m-0 flex-column align-items-center pt-4 stats-border'>
                        <h1 className='l-s mb-3 text-white'>Hole {holeCounter + 1}</h1>
                        <h4 className='l-s mb-3' style={{color: 'white'}}>Length: {course.holeLength[holeCounter]}</h4>
                        <h4 className='l-s text-warning'>Par: {course.holePar[holeCounter]}</h4>
                        <h4 className='l-s text-white'>Current Score: {playerScore}</h4>
                    </div>
                </Container>
                <div className='challengeDiv flex-column d-flex px-3 mx-auto w-100 align-items-center justify-content-center'>
                    <h1 className='ul'>Challenge:</h1>
                    <p className='text-center text-large'></p>
                </div>
                <div className='w-100 bottom-form-container border-top-0'>
                    <Form onSubmit={handleSubmit} className='w-100'>
                        <Form.Group className='bottom-form-container border-top-0 d-flex align-items-center w-100 justify-content-center'>
                        <Form.Label style={{fontSize: '24px', color: 'black'}} className='flex-grow-3'>Score:</Form.Label>
                        <Form.Control name='roundPoints' placeholder='4' onChange={onChange} value={roundPoints} style={{backgroundColor: 'hsla(0, 14%, 49%, 0.712)', marginLeft: '20px', maxWidth: '40px'}} className='px-3 mr-2 w-25 score-input' type='text' required />
                        <Button style={{marginLeft: '20px'}} className='mb-2 btn-warning'type='submit'>Next Hole <FaArrowRight /></Button>
                        </Form.Group>
                    </Form>
                </div>
        </Container>
    )
}

export default Game
