import React,{useState} from 'react'
import axios from 'axios'
import { Card, Form, Button} from 'react-bootstrap'
import NavBar from '../components/landing/NavBar'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')
    const [msg, setMsg] = useState('')
    const [displayErrMsg, setDisplayErrMsg] = useState('none')

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/accounts', {
              email,
              username,
              passwd,
            });
      
            if (response.data.msg === 'success') {
                navigate('/login')
            } else {
                setMsg(response.data.msg)
                setDisplayErrMsg('block')
            }
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    }

    return (
        <>
            <NavBar />
            <div style={{height: '80vh'}} className="d-flex align-items-center justify-content-center">
                <Card className="rounded mx-auto mt-5">
                    <Card.Body className="text-center">
                        <Card.Title>Register</Card.Title>
                        <hr />
                        <Form className="px-4 mx-2" onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control required 
                                    type="email" 
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Control required 
                                    type="text" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control required 
                                    type="password" 
                                    placeholder="Password"
                                    value={passwd}
                                    onChange={(e) => setPasswd(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password2">
                                <Form.Control required type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <p className='text-danger' style={{display: displayErrMsg}}>{msg}</p>
                            <Button variant="primary" type="submit">
                                Create PayGrid Account
                            </Button>
                        </Form>
                        <hr />
                        <Button variant="outline-success" onClick={() => navigate('/login')}>
                            Back to LogIn
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Register
