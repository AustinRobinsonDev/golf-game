import { Container, Form, Button } from 'react-bootstrap';

const Login = (props) => {
    return (
    <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
        <Form className='w-100'>
            <Form.Group>
                <Form.Label>Enter Username</Form.Label>
                <Form.Control 
                    placeholder='Username...' 
                    type='text' 
                    onChange={props.onChange} 
                    value={props.username} 
                    required                     
                />
            </Form.Group>
            <Button onClick={props.connect}>Connect</Button>
        </Form>
    </Container>
    )
}

export default Login
