// list of yet to be cleared bills
import {Container, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PendingList = ({ bills }) => {
  const navigate = useNavigate()

  const payBill = (bill_id, amount) => {
    localStorage.setItem('bill_id', bill_id)
    localStorage.setItem('amount', amount)
    navigate('/checkout')
  }

  return (
    <Container className='pt-3'>
      <Table striped responsive style={{height:'50px'}}>
        <thead>
          <tr className='text-center py-3' colSpan="4">
            <h3 style={{ borderBottom: '7px solid red', width: '50%' }}>Pending bills</h3>
          </tr>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index} onClick={() => payBill(bill.bill_id, bill.amount)}>
              <td>{bill.month}</td>
              <td>{bill.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default PendingList
