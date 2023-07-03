import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import NavBar from '../components/landing/NavBar'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <div style={{height: '70vh'}} className="d-flex align-items-center justify-content-center">
                <Card className="rounded mx-auto mt-5">
                    <Card.Body className="text-center">
                        <Card.Title>Log In</Card.Title>
                        <hr />
                        <Form className="px-4 mx-2">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control required type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control required type="password" placeholder="Password" />
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
