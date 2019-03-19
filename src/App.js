import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'

import Carousel from './components/Carousel'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends React.Component {
    state = {
        name: 'Natu KulaVruttant',
    }

    render() {
        return (
            <div className="mainContainer">
                <Navbar
                    style={{ textAlign: 'center', marginTop: 100, height: 200 }}
                />
                <div
                    className="mainHeaderTitle"
                    style={{ textAlign: 'center' }}
                >
                    <h1>Welcome to the official site for The Natus!</h1>
                </div>
                <Carousel style={{ textAlign: 'center', marginTop: 100 }} />
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
