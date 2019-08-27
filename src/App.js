import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import { Router } from '@reach/router'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import fire from './Config/Fire'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
//import FacebookLoginButton from './modules/FacebookLoginButton'
import About from './pages/About'
import Chatroom from './pages/Chatroom'
import Contact from './pages/Contact'
//import Information from './pages/Information'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Connect from './pages/Connect'
import Places from './pages/Places'
import Events from './pages/Events'

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
            //console.log('user', user)
            if (user) {
                this.setState({ user, isLoading: false })
                //localStorage.setItem('user', user.uid)
            } else {
                this.setState({ user: null, isLoading: false })
                //localStorage.removeItem('user')
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
                        {/* <button
                            className="logoutButtonStyle"
                            onClick={this.logout}
                        >
                            Logout
                        </button>
                        <FacebookLoginButton onLogin={this.onFacebookLogin}>
                            Login with Facebook
                        </FacebookLoginButton> */}
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
