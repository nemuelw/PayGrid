// options to choose: airtel, telcom, mpesa
import { useState } from 'react'
import axios from 'axios'
import {Row,Col,Button,Card,Form,FormLabel} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [displayErrMsg, setDisplayErrMsg] = useState('none') 
  const amount = localStorage.getItem('amount')
  const bill_id = localStorage.getItem('bill_id')

  const processPayment = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:8000/payment', {
          phone,
          amount,
          bill_id
        });

        if (response.data.msg === 'success') {
            navigate('/success')
        } else {
            setDisplayErrMsg('block')
        }
    } catch (error) {
        console.error('Error:', error.response.data);
    }
  }

  return (
    <div style={{height: '70vh'}} className="d-flex align-items-center justify-content-center">
      <Card className="rounded mx-auto mt-5">
          <Card.Body className="text-center">
              <Card.Title>Make Payment</Card.Title>
              <hr />
              <Form className="px-4 mx-2" onSubmit={processPayment}>
              <Form.Group controlId="phone">
                  <Form.Control required 
                      type="tel" 
                      placeholder="Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
              <FormLabel bsStyle="info" className='mt-2'>Amount : {amount}</FormLabel>
              <Row className="mt-4 d-flex align-items-center">
                  <Col xs={6} className="text-start">
                    <Button variant="warning" onClick={() => navigate('/portal')}>
                        Back
                    </Button>
                  </Col>
                  <Col xs={6} className="text-end">
                    <Button variant="primary" type="submit">
                        Pay
                    </Button>
                  </Col>
              </Row>
              <p className='text-danger' style={{display: displayErrMsg}}>An error occurred ! Contact admin</p>
              </Form>
          </Card.Body>
      </Card>
  </div>
  )
}

export default Checkout
