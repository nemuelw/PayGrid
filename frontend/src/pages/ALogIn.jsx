import React from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

const ALogIn = () => {
  return (
    <div style={{height: '90vh'}} className="d-flex align-items-center justify-content-center">
        <Card className="rounded mx-auto mt-5">
            <Card.Body className="text-center">
                <Card.Title>Admin Log In</Card.Title>
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
                    <a href='/forgot' style={{fontSize: '97%'}} className="text-decoration-none">
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
            </Card.Body>
        </Card>
    </div>
  )
}

export default ALogIn
