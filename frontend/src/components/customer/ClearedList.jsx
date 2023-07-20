import {Container, Card, Table} from 'react-bootstrap'

const ClearedList = ({ bills }) => {
  return (
    <Container>
      <Card className='p-3' style={{ height: '50vh', overflowY: 'auto', border: '1px solid black' }}>
        <Table striped responsive style={{height:'50px'}}>
          <thead style={{ background: 'green', color: 'white' }}>
            <tr className='text-center py-3' colSpan="4">
              <h3>Cleared bills</h3>
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
      </Card>
    </Container>
  )
}

export default ClearedList
