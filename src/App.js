import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import { Router } from '@reach/router'
import fire from './Config/Fire'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Chatroom from './pages/Chatroom'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Connect from './pages/Connect'
import Places from './pages/Places'
import Events from './pages/Events'
import ModifiedHome from './pages/ModifiedHome';
if (module.hot) { module.hot.accept() }

class App extends React.Component {

    state = {
        username: null,
        userId: '',
        accessToken: '',
        connectionStatus: false,
        user: null,
        isLoading: true,
    }

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name,
                userId: resultObject.user.id,
                accessToken: resultObject.response.authResponse.accessToken,
                connectionStatus:
                    resultObject.response.status === 'connected' ? true : false,
                isLoading: false,
            })
        } else {
            this.setState({
                isLoading: false,
            })
            //alert('Facebook login error')
        }
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user, isLoading: false })
            } else {
                this.setState({ user: null, isLoading: false })
            }
        })
    }

    logout() {
        fire.auth().signOut()

        this.setState({
            user: null,
        })
    }

    componentDidMount() {
        this.authListener()
    }

    render() {
        const { user, isLoading } = this.state
        return (
            <div>
                {user ? (
                    <div className="mainContainer">
                        <Navbar
                            style={{
                                textAlign: 'center',
                                marginTop: 100,
                                height: 200,
                            }}
                        />
                        <Router>
                            <Home
                                path="/"
                                user={user}
                                username
                                userid
                                accessToken
                                connectionStatus
                            />
                            <About path="/about" />
                            <Chatroom
                                path="/chatroom"
                                user={user}
                            />
                            <Gallery path="/gallery" />
                            <News path="/news" />
                            <Events path="/events" />
                            <Connect path="/connect" />
                            <Places path="/places" />
                            <Contact path="/contact" />
                            <ModifiedHome path="/home-modified" />
                        </Router>
                    </div>
                ) : (
                        <div>
                            {isLoading ? <div className="cssLoader" /> : <Login />}
                        </div>
                    )}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
