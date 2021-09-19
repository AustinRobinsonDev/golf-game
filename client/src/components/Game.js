import React, {useRef} from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Game = () => {
    let holeCount = 1;
    const challenges = [
        "This is 1 text for a challenge, keep reading almost done, okay that will be all",
        "This is 2 text for a challenge, keep reading almost done, okay that will be all",
        "This is 3 text for a challenge, keep reading almost done, okay that will be all"
    ]


    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container className="w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh', maxWidth: '500px'}}>
                <Container className='w-100 d-flex m-0 flex-column align-items-center stats pt-4'>
                    <h1 className='mb-3 mt-3'>Hole {holeCount}</h1>
                    <h4 className='mb-3' style={{color: 'white'}}>Length: 475</h4>
                    <h4 className='text-warning'>Par: 5</h4>
                </Container>
                <div className='challengeDiv flex-column d-flex px-3 mx-auto w-100 align-items-center'>
                <h1 className='pt-3'>Challenge:</h1>
                    <p className='text-center text-large'>{challenges[2]}</p>
                </div>
                <div className='w-100'>
                    <Form onSubmit={handleSubmit} className='w-100'>
                        <Form.Group className='d-flex align-items-center w-100 justify-content-center'>
                        <Form.Label style={{fontSize: '24px', color: 'black'}} className='flex-grow-3'>Score</Form.Label>
                        <Form.Control style={{marginLeft: '20px', maxWidth: '50px'}} className='mr-2 w-25' type='text' required />
                        <Button style={{marginLeft: '20px'}} className='mt-2 mr-2' type='submit'>Next Hole</Button>
                        </Form.Group>

                    </Form>
                </div>
        </Container>
    )
}

export default Game
