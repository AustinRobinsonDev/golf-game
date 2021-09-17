import React from 'react';
import { Container, Row } from 'react-bootstrap';


const Game = () => {
    let holeCount = 1;
    return (
        <Container className="w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh'}}>

 
                <Container className='w-100 d-flex m-0 flex-column align-items-center stats pt-4'>
                    <h1 className='mb-3 mt-3'>Hole {holeCount}</h1>
                    <h4 className='mb-3' style={{color: 'white'}}>Length: 475</h4>
                    <h4 className='text-warning'>Par: 5</h4>
                </Container>
                <div className='mx-auto mt-5'>
                    <p className='text-center'>Each player must tee off of a beer can.</p>
                </div>


        </Container>
    )
}

export default Game