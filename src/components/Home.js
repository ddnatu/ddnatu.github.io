import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import './../styles/home.scss'

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
                {/* <Container className="homeContainer">
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
                </Container> */}
                <Container className="containerCustom">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row className="rowFirst rowCustom">
                        <Col className="columns colHistory" xs={12} md={8}>
                            History
                        </Col>
                        <Col className="columns colEvents" xs={6} md={4}>
                            Events
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row className="rowSecond rowCustom">
                        <Col className="columns colConnect" xs={6} md={4}>
                            Connect
                        </Col>
                        <Col className="columns colPlaces" xs={6} md={4}>
                            Places
                        </Col>
                        <Col className="columns colInformation" xs={6} md={4}>
                            Information
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row className="rowThird rowCustom">
                        <Col className="columns colGallery" xs={6}>
                            Gallery
                        </Col>
                        <Col className="columns colNews" xs={6}>
                            News
                        </Col>
                    </Row>
                </Container>
                ;
            </div>
        )
    }
}

export default Home
