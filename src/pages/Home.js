import React from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import './../styles/home.scss'
import { Link } from '@reach/router'

import Birthday from './../pages/Birthday'
import Carousel from './../pages/Carousel'
import Events from './../pages/Events'
class Home extends React.Component {
    state = {
        isHome: true,
        user: this.props.user,
        username: this.props.username,
        userid: this.props.userid,
        accessToken: this.props.accessToken,
        connectionStatus: this.props.connectionStatus,
    }

    constructor(props) {
        super(props);
        //this.getData = this.getData.bind(this);
    }

    getData() {
        let res = axios.get(
            'http://localhost:3001/tweetsSample1'
        );
        res.then((data) => {
            console.log('response from the node server', data);
        });
        res.catch((error) => {
            console.log('error', error);
        });
    }


    render() {
        const {
            user,
            username,
            userid,
            accessToken,
            connectionStatus,
        } = this.state

        return (
            <div>
                <div
                    className="mainHeaderTitle"
                    style={{ textAlign: 'center' }}
                >
                    <h1 style={{ display: 'inline-block' }}>
                        Welcome to the official site of The Natus!
                    </h1>
                </div>
                <Carousel
                    style={{ textAlign: 'center', marginTop: 100 }}
                    username={username}
                    userid={userid}
                    accessToken={accessToken}
                    connectionStatus={connectionStatus}
                />
                <section>
                    {/* <button onClick={this.getData()} >Test Node API </button> */}
                </section>
                <Events />
                <Birthday user={user} />
                <div
                    className="home"
                    style={{ textAlign: 'center', marginTop: 50 }}
                >
                    <Container className="containerCustom">
                        {/* Stack the columns on mobile by making one full-width and the other half-width */}
                        <Row className="rowFirst rowCustom">
                            <Col className="columns colHistory" xs={12} md={8}>
                                <Link to="/history">History</Link>
                            </Col>
                            <Col className="columns colEvents" xs={6} md={4}>
                                <Link to="/events">Events</Link>
                            </Col>
                        </Row>

                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                        <Row className="rowSecond rowCustom">
                            <Col className="columns colConnect" xs={6} md={4}>
                                <Link to="/connect">Connect</Link>
                            </Col>
                            <Col className="columns colPlaces" xs={6} md={4}>
                                <Link to="places">Places</Link>
                            </Col>
                            <Col
                                className="columns colInformation"
                                xs={6}
                                md={4}
                            >
                                <Link to="information">Information</Link>
                            </Col>
                        </Row>

                        {/* Columns are always 50% wide, on mobile and desktop */}
                        <Row className="rowThird rowCustom">
                            <Col className="columns colGallery" xs={6}>
                                <Link to="/gallery">Gallery</Link>
                            </Col>
                            <Col className="columns colNews" xs={6}>
                                <Link to="/news">News</Link>
                            </Col>
                        </Row>
                    </Container>
                    ;
                </div>
            </div>
        )
    }
}

export default Home
