import React from 'react'
import { Card, Form, Button} from 'react-bootstrap'
import NavBar from '../components/landing/NavBar'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <NavBar />
            <div style={{height: '80vh'}} className="d-flex align-items-center justify-content-center">
                <Card className="rounded mx-auto mt-5">
                    <Card.Body className="text-center">
                        <Card.Title>Register</Card.Title>
                        <hr />
                        <Form className="px-4 mx-2">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control required type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control required type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control required type="password" placeholder="Confirm Password" />
                            </Form.Group>
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
