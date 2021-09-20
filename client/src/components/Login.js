import { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSocket } from '../context/SocketProvider';
import io from 'socket.io-client'

const Login = ({ onIdSubmit, id}) => {
    const idRef = useRef();
    const socket = useSocket();
    const handleSubmit = e => {
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }
    const handleClick = (e) => {
        onIdSubmit(idRef.current.value)
        socket.emit('join-room');

    }
    return (
    <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter Game I.D</Form.Label>
                <Form.Control type='text' ref={idRef} name='roomId' required />
            </Form.Group>
            <Button style={{marginRight: '20px'}} name='newRoom' className='mt-2' type='submit'>Create New Game</Button>
            <Button onClick={handleClick}>Join</Button>
        </Form>
    </Container>
    )
}

export default Login
