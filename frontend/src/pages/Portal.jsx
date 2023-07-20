import { useEffect,useState } from 'react';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import NavBar from '../components/customer/NavBar';

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
            {/* list of previous/pending payments */}
        </Container>
    </>
  )
}

export default Portal
