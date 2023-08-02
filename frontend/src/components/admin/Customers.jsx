import axios from 'axios'
import { useState, useEffect } from 'react'
import {Container, Card, Table} from 'react-bootstrap'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = async () => {
    const result = await axios.get('http://localhost:8000/customers')
    console.log(result.data)
    setCustomers(result.data)
  }

  return (
    <Container className='mt-3'>
      <Card className='p-3' style={{ height: '80vh', overflowY: 'auto', border: '1px solid black' }}>
        <Table striped responsive style={{height:'50px'}}>
          <thead>
            <tr className='text-center py-3' colSpan="4">
              <h3 style={{ borderBottom: '7px solid green', width: '50%' }}>Customers</h3>
            </tr>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">Loading...</td>
              </tr>
            ) : (
              customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.first_name}</td>
                  <td>{customer.last_name}</td>
                  <td>{customer.email_address}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default Customers
