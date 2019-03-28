import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

import fire from './Config/Fire'
import Login from './components/Login'
import Carousel from './components/Carousel'
import Home from './components/Home'
import Navbar from './components/Navbar'
import FacebookLoginButton from './modules/FacebookLoginButton'

class App extends React.Component {
    state = {
        username: null,
        userId: '',
        accessToken: '',
        connectionStatus: false,
        user: null,
    }

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name,
                userId: resultObject.user.id,
                accessToken: resultObject.response.authResponse.accessToken,
                connectionStatus:
                    resultObject.response.status === 'connected' ? true : false,
            })
        } else {
            //alert('Facebook login error')
        }
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                this.setState({ user })
                //localStorage.setItem('user', user.uid)
            } else {
                this.setState({ user: null })
                //localStorage.removeItem('user')
            }
        })
    }
    componentDidMount() {
        this.authListener()
    }
    render() {
        const {
            accessToken,
            username,
            userId,
            connectionStatus,
            user,
        } = this.state
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
                        <div
                            className="mainHeaderTitle"
                            style={{ textAlign: 'center' }}
                        >
                            <h1 style={{ display: 'inline-block' }}>
                                Welcome to the official site of The Natus!
                            </h1>
                            <FacebookLoginButton onLogin={this.onFacebookLogin}>
                                Login with Facebook
                            </FacebookLoginButton>
                        </div>
                        <Carousel
                            style={{ textAlign: 'center', marginTop: 100 }}
                            username={username}
                            userid={userId}
                            accessToken={accessToken}
                            connectionStatus={connectionStatus}
                        />
                        <Home />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
