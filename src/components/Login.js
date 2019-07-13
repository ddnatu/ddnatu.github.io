import React, { Component } from 'react'
import fire from './../Config/Fire'
import './../styles/login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {
            email: '',
            password: '',
            isLoading: false,
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    login(e) {
        this.setState({
            isLoading: true,
        })
        e.preventDefault()
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
                u
                this.setState({
                    isLoading: false,
                })
            })
            .catch(error => {
                this.setState({
                    isLoading: true,
                })
                console.log(error)
            })
    }

    signup(e) {
        e.preventDefault()
        fire.auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
            .then(
                this.setState({
                    isLoading: false,
                })
            )
            .catch(error => {
                this.setState({
                    isLoading: true,
                })
                console.log(error)
            })
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                {isLoading ? (
                    <div className="loader">
                        {/* <FontAwesomeIcon
                            style={{ fontSize: '10em' }}
                            icon={faSpinner}
                        /> */}
                        <div className="cssLoader" />
                    </div>
                ) : (
                    <div className="login-container">
                        <div className="content-container">
                            <form>
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    type="email"
                                    name="email"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />

                                <label htmlFor="exampleInputPassword1">
                                    Password
                                </label>
                                <input
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                    name="password"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                                <div className="login-signup">
                                    <button
                                        type="submit"
                                        className="login"
                                        onClick={this.login}
                                    >
                                        LOGIN
                                    </button>
                                    <button
                                        type="submit"
                                        className="login"
                                        onClick={this.signup}
                                        style={{ marginLeft: '25px' }}
                                    >
                                        SIGNUP
                                    </button>
                                    {/* <button className="media fb">
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    />
                                </button>
                                <button className="media g">
                                    <i
                                        className="fa fa-google"
                                        aria-hidden="true"
                                    />
                                </button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Login
