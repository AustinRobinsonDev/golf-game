import React from 'react';
import { Container, Row } from 'react-bootstrap';


const Game = () => {
    let holeCount = 1;
    return (
        <Container className="w-100 d-flex flex-column align-items-center p-0" style={{ height: '100vh'}}>
            <Container className='d-flex justify-content-center bg-secondary w-100'>
                <div className='d-flex justify-content-center mx-auto'>
                    <ul className='mx-auto'>
                        <li className='mx-auto'>player1Id</li>
                        <li className='mx-auto'>player2Id</li>
                        <li className='mx-auto'>player3Id</li>
                    </ul>
                    <ul className='mx-auto'>
                        <li className='mx-auto'>player4Id</li>
                        <li className='mx-auto'>player5Id</li>
                        <li className='mx-auto'>player6Id</li>
                    </ul>
                </div>
            </Container>
            <h1>Hole {holeCount}</h1>
            <Container className='d-flex flex-column align-items-start mt-5 py-3 mOpacity stats' style={{maxWidth: '350px'}}>
                <Container className='w-50'>
                    <h4>Length: 475</h4>
                    <h4>Par: 5</h4>
                </Container>
                <div className='mx-auto mt-5'>
                    <p className='text-center'>Each player must tee off of a beer can.</p>
                </div>
            </Container>
            <div>

            </div>

        </Container>
    )
}

export default Game
