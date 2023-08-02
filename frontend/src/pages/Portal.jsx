import { Container } from 'react-bootstrap';
import NavBar from '../components/customer/NavBar';
import PendingList from '../components/customer/PendingList'
import ClearedList from '../components/customer/ClearedList'

const pendingBills = [
  {
    month: 'Jul',
    amount: 650
  },
  // Add more bills as needed
]

const clearedBills = [
  {
    month: 'Jun',
    amount: 425
  },
  {
    month: 'May',
    amount: 300
  },
  {
    month: 'Apr',
    amount: 450
  },
  {
    month: 'Mar',
    amount: 275
  },
  {
    month: 'Feb',
    amount: 300
  },
  {
    month: 'Jan',
    amount: 325
  }
]

const Portal = () => {

  return (
    <>
        <NavBar />
        <Container fluid>
            {/* list of cleared/pending payments */}
            <PendingList bills={pendingBills} />
            <ClearedList bills={clearedBills} />
        </Container>
    </>
  )
}

export default Portal
