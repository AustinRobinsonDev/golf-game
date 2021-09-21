import React, { useState} from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Game = (props) => {
    const room = 'general';
    function renderUsers (user) {
        if(user.id === props.yourId) {
            return (
                <p key={user.id} >You: {user.username}</p>
            )
        }
        return (
            <p key={user.id} >{user.username}</p>
        )
    }
    return (
        <Container className="game-wrapper w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh', maxWidth: '500px'}}>
                <Container className='w-100 d-flex m-0 flex-column align-items-center justify-content-center stats'>
                <h1 className='text-center text-white text-shadow mb-5'>Pell City Country Club</h1>
                <p className='text-white text-shadow-light'>Your room ID: {room}</p>
                    <div className='z-index-0 d-flex m-0 flex-column align-items-center pt-4 stats-border'>
                        <h1 className='l-s mb-3 text-white'>{props.holeCounter < 10 ? 'Hole:' + props.holeCounter : 'Finished'}</h1>
                        <h4 className='l-s mb-3' style={{color: 'white'}}>Length: {props.course.holeLength[props.holeCounter - 1]}</h4>
                        <h4 className='l-s text-warning'>Par: {props.course.holePar[props.holeCounter - 1]}</h4>
                        <h4 className='l-s text-white'>Current Score: {props.currentScore}</h4>
                    </div>
                </Container>
                <div className='challengeDiv flex-column d-flex px-3 mx-auto w-100 align-items-center justify-content-center'>
                    <div className='d-flex w-100 justify-content-around'>Players: {props.allUsers.map(renderUsers)}</div>
                    <h1 className='ul'>Challenge: </h1>
                    <p className='text-center text-large'>{props.course.rules[props.random]}</p>
                </div>
                <div className='w-100 bottom-form-container border-top-0'>
                    <Form className='w-100'>
                        <Form.Group className='bottom-form-container border-top-0 d-flex align-items-center w-100 justify-content-center'>
                        <Form.Label style={{fontSize: '24px', color: 'black'}} className='flex-grow-3'>Score:</Form.Label>
                        <Form.Control name='roundPoints' placeholder='4' onChange={props.onScoreChange} value={props.roundPoints} style={{backgroundColor: 'hsla(0, 14%, 49%, 0.712)', marginLeft: '20px', maxWidth: '40px'}} className='px-3 mr-2 w-25 score-input' type='text' required />
                        <Button style={{marginLeft: '20px'}} className='mb-2 btn-warning' onClick={(props.nextHole)} >Next Hole <FaArrowRight /></Button>
                        </Form.Group>
                    </Form>
                </div>
        </Container>
    )
}

export default Game
