import { useEffect,useState } from 'react';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import NavBar from '../components/customer/NavBar';
import PendingList from '../components/customer/PendingList'
import ClearedList from '../components/customer/ClearedList'

const bills = [
  {
    numberOfUnits: 100,
    unitPrice: 10,
    totalAmount: 1000,
    dueDate: '2023-07-31',
  },
  {
    numberOfUnits: 50,
    unitPrice: 15,
    totalAmount: 750,
    dueDate: '2023-08-15',
  },
  // Add more bills as needed
];

const Portal = () => {
  const [cleared, setCleared] = useState([])
  const [pending, setPending] = useState([])

  useEffect(() => {
    fetchClearedBills();
    fetchPendingBills();
  }, [])

  const fetchClearedBills = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cleared')
      setCleared(response.data)
    } catch (err) {
      console.log('Error occurred : ' + err)
    }
  }

  const fetchPendingBills = async () => {
    try {
      const response = await axios.get('http://localhost:8000/pending')
      setPending(response.data)
    } catch (err) {
      console.log('Error occurred : ' + err)
    }
  }

  return (
    <>
        <NavBar />
        <Container fluid>
            {/* list of cleared/pending payments */}
            <PendingList bills={bills} />
            <ClearedList bills={bills} />
        </Container>
    </>
  )
}

export default Portal
