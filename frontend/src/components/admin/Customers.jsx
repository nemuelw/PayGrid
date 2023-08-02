import { useState } from 'react'
import {Container, Card, Table} from 'react-bootstrap'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  return (
    <Container>
      <Card className='p-3' style={{ height: '50vh', overflowY: 'auto', border: '1px solid black' }}>
        <Table striped responsive style={{height:'50px'}}>
          <thead>
            <tr className='text-center py-3' colSpan="4">
              <h3 style={{ borderBottom: '7px solid green', width: '50%' }}>Cleared bills</h3>
            </tr>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.month}</td>
                <td>{customer.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default Customers
