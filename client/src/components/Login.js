import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid'
const Login = (props) => {

    function handleSubmit(e) {
        e.preventDefault()
        props.connect();
        props.onIdSubmit(props.username)
      }

    function createNewId() {
        props.onSubmitId(uuidV4())
        props.connect();
        
      }
    return (
    <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
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
            <Button onClick={createNewId}>Connect</Button>
            <Button type='submit'>Connect</Button>
        </Form>
    </Container>
    )
}

export default Login
