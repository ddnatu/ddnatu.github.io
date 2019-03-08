import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Natu KulaVruttant',
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <h1>Welcome to the official site for The Natus!</h1>
                <Button variant="flat" size="xxl">
                    Flat Button new kjhsdfkjhsdf
                </Button>
                <Alert dismissible variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                </Alert>
                ; ;<button>normal button something</button>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col> 1 of 2 </Col>
                        <Col> 2 of 2 </Col>
                    </Row>
                </Container>
                <div>
                    <p> first p1 </p>
                    <p> first p2 </p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
