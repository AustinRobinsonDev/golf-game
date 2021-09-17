import React from 'react';
import { Container, Row } from 'react-bootstrap';


const Game = () => {
    let holeCount = 1;
    const challenges = [
        "This is 1 text for a challenge, keep reading almost done, okay that will be all",
        "This is 2 text for a challenge, keep reading almost done, okay that will be all",
        "This is 3 text for a challenge, keep reading almost done, okay that will be all"
    ]
    return (
        <Container className="w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh'}}>
                <Container className='w-100 d-flex m-0 flex-column align-items-center stats pt-4'>
                    <h1 className='mb-3 mt-3'>Hole {holeCount}</h1>
                    <h4 className='mb-3' style={{color: 'white'}}>Length: 475</h4>
                    <h4 className='text-warning'>Par: 5</h4>
                </Container>
                <div className='challengeDiv flex-column d-flex px-3 mx-auto w-100 align-items-center'>
                <h1 className=''>Challenge:</h1>
                    <p className='text-center text-large'>{challenges[0]}</p>
                </div>
        </Container>
    )
}

export default Game
