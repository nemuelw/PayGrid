// list of yet to be cleared bills
import {Container, Table} from 'react-bootstrap'

const PendingList = ({ bills }) => {
  return (
    <Container className='pt-3'>
      <Table striped responsive style={{height:'50px'}}>
        <thead style={{ background: 'red', color: 'white' }}>
          <tr className='text-center py-3' colSpan="4">
            <h3>Pending bills</h3>
          </tr>
          <tr>
            <th>Number of Units</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.numberOfUnits}</td>
              <td>{bill.unitPrice}</td>
              <td>{bill.totalAmount}</td>
              <td>{bill.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default PendingList
