import React, {useRef} from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';


const Game = () => {
    let holeCount = 1;
    const challenges = [
        "This is 1 text for a challenge, keep reading almost done, okay that will be all",
        "This is 2 text for a challenge, keep reading almost done, okay that will be all",
        "This means nothing. I have no challenges. Just filler text. Move along."
    ]
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container className="game-wrapper w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh', maxWidth: '500px'}}>
                <Container className='w-100 d-flex m-0 flex-column align-items-center justify-content-center stats'>
                    <div className='d-flex m-0 flex-column align-items-center pt-4 stats-border'>
                        <h1 className='l-s mb-3 text-white'>Hole {holeCount}</h1>
                        <h4 className='l-s mb-3' style={{color: 'white'}}>Length: 475</h4>
                        <h4 className='l-s text-warning'>Par: 5</h4>
                    </div>
                </Container>
                <div className='challengeDiv flex-column d-flex px-3 mx-auto w-100 align-items-center justify-content-center'>
                <h1 className='ul'>Challenge:</h1>
                    <p className='text-center text-large'>{challenges[2]}</p>
                </div>
                <div className='w-100 bottom-form-container border-top-0'>
                    <Form onSubmit={handleSubmit} className='w-100'>
                        <Form.Group className='bottom-form-container border-top-0 d-flex align-items-center w-100 justify-content-center'>
                        <Form.Label style={{fontSize: '24px', color: 'black'}} className='flex-grow-3'>Score:</Form.Label>
                        <Form.Control placeholder='4'style={{backgroundColor: 'hsla(0, 14%, 49%, 0.712)', marginLeft: '20px', maxWidth: '40px'}} className='px-3 mr-2 w-25 score-input' type='text' required />
                        <Button style={{marginLeft: '20px'}} className='mb-2 btn-warning'type='submit'>Next Hole <FaArrowRight /></Button>
                        </Form.Group>
                    </Form>
                </div>
        </Container>

    )
}

export default Game
