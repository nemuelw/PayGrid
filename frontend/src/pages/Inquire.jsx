import {Card, Form, Button} from 'react-bootstrap'
import NavBar from '../components/landing/NavBar'

const Inquire = () => {
  return (
    <>
        <NavBar />
        <div style={{height: '80vh'}} className="d-flex align-items-center justify-content-center">
            <Card className="rounded mx-auto mt-5">
                <Card.Body className="text-center">
                    <Card.Title>Make Inquiry</Card.Title>
                    <hr />
                    <Form className="px-4 mx-2">
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control required type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control required type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inquiry">
                            <Form.Control required as="textarea" rows={5} placeholder="Inquiry" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Inquiry
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </>
  )
}

export default Inquire
