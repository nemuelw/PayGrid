import React from 'react'
import { Container, Card } from 'react-bootstrap'
import gridImage from '../../assets/grid.jpg'

const Hero = () => {
    const containerStyle = {
        backgroundImage: `url(${gridImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        height: '91vh',
        opacity: .8
      };

    return (
        <Container fluid style={containerStyle}>
            <div class="d-flex flex-column align-items-center flex-wrap">
                <Card style={{maxWidth: '650px'}} className="p-5 text-white justify-content-center" bg="transparent">
                    <Card.Body className="text-center">
                        <Card.Title className="justify-content-center">
                            <h2>PayGrid</h2>
                        </Card.Title>
                        <hr className="border-top" />
                        <Card.Text>
                            <p>
                                Welcome to PayGrid !
                                <hr />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Minima cumque nam sit. Ratione molestiae in voluptatum quia 
                                delectus doloremque hic iusto rerum dicta nostrum ea similique, 
                                ab, facere consequuntur labore eum odit quibusdam sit minus! 
                                Ea voluptas, minus sapiente fuga harum sint adipisci nam 
                                pariatur perferendis, dolor esse, consequatur similique sit iste.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Hero
