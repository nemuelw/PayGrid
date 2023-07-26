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
            <th>Month</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td>{bill.month}</td>
                <td>{bill.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default ClearedList
