import React, {useState} from 'react'
import axios from 'axios'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import NavBar from '../components/landing/NavBar'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [displayErrMsg, setDisplayErrMsg] = useState('none')

    const handleLogIn = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/auth/c', {
              email,
              passwd,
            });
      
            if (response.data.msg === 'success') {
                navigate('/portal')
            } else {
                setDisplayErrMsg('block')
            }
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    }

    return (
        <>
            <NavBar />
            <div style={{height: '70vh'}} className="d-flex align-items-center justify-content-center">
                <Card className="rounded mx-auto mt-5">
                    <Card.Body className="text-center">
                        <Card.Title>Log In</Card.Title>
                        <hr />
                        <Form className="px-4 mx-2" onSubmit={handleLogIn}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control required 
                                    type="email" 
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control required 
                                type="password" 
                                placeholder="Password"
                                value={passwd}
                                onChange={(e) => setPasswd(e.target.value)} />
                        </Form.Group>
                        <Row className="mt-4 d-flex align-items-center">
                            <Col xs={6} className="text-start">
                            <a href="google.com" style={{fontSize: '97%'}} className="text-decoration-none">
                                Forgot password?
                            </a>
                            </Col>
                            <Col xs={6} className="text-end">
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                            </Col>
                        </Row>
                        <p className='text-danger' style={{display: displayErrMsg}}>Invalid credentials</p>
                        </Form>
                        <hr />
                        <Button variant="outline-success" onClick={() => navigate('/register')}>
                            Register
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default LogIn
