import { Container } from 'react-bootstrap';
import NavBar from '../components/customer/NavBar';

const Portal = () => {
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
