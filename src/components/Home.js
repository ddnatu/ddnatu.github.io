import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'

class Home extends React.Component {
    state = {
        isHome: true,
    }
    render() {
        return (
            <div
                className="home"
                style={{ textAlign: 'center', marginTop: 50 }}
            >
                <Container className="homeContainer">
                    <Row className="rows">
                        <Col>
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industrys standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Col>
                        <Col>Subscribe to our Newsletter</Col>
                    </Row>
                    <Row className="rows">
                        <Col>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here content.
                        </Col>
                        <Col>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here.
                        </Col>
                        <Col>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here.
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
