import { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ onIdSubmit }) => {
    const idRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    return (
    <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter Game I.D</Form.Label>
                <Form.Control type='text' ref={idRef} required />
            </Form.Group>
            <Button style={{marginRight: '20px'}} className='mt-2' type='submit'>Create New ID</Button>
            <Button variant='secondary' className='mt-2'>Create a New Game</Button>
        </Form>
    </Container>
    )
}

export default Login
