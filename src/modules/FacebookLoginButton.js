import React, { Component } from 'react'

export default class FacebookLogin extends Component {
    componentDidMount() {
        document.addEventListener('FBObjectReady', this.initializeFacebookLogin)
    }

    componentWillUnmount() {
        document.removeEventListener(
            'FBObjectReady',
            this.initializeFacebookLogin
        )
    }

    /**
     * Init FB object and check Facebook Login status
     */
    initializeFacebookLogin = () => {
        this.FB = window.FB
        this.checkLoginStatus()
    }

    /**
     * Check login status
     */
    checkLoginStatus = () => {
        this.FB.getLoginStatus(this.facebookLoginHandler)
    }

    /**
     * Check login status and call login api is user is not logged in
     */
    facebookLogin = () => {
        if (!this.FB) return

        this.FB.getLoginStatus(
            response => {
                if (response.status === 'connected') {
                    this.facebookLoginHandler(response)
                } else {
                    this.FB.login(this.facebookLoginHandler, {
                        scope: 'public_profile',
                    })
                }
            },
            {
                scope:
                    'email,friends_birthday,user_photos,friends_photos,publish_actions',
            }
        )
    }

    fbCredentials(arg) {
        let fbDetails = arg
        let uid, accessToken, username
        //https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus/
        if (fbDetails.status === 'connected') {
            // The user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token
            // and signed request each expire.
            uid = fbDetails.authResponse.userID
            accessToken = fbDetails.authResponse.accessToken
            username = fbDetails.user.username
        } else if (fbDetails.status === 'not_authorized') {
            // The user hasn't authorized your application.  They
            // must click the Login button, or you must call FB.login
            // in response to a user gesture, to launch a login dialog.
        } else {
            // The user isn't logged in to Facebook. You can launch a
            // login dialog with a user gesture, but the user may have
            // to log in to Facebook before authorizing your application.
        }
        this.setState({
            username: username,
            userId: uid,
            accessToken: accessToken,
        })
    }

    /**
     * Handle login response
     */
    facebookLoginHandler = response => {
        if (response.status === 'connected') {
            this.FB.api('/me', userData => {
                let result = {
                    response: response,
                    user: userData,
                }
                this.props.onLogin(true, result)
            })
        } else {
            this.props.onLogin(false)
        }
    }

    render() {
        let { children } = this.props
        return (
            <button
                className="facebookButtonStyle"
                style={{}}
                target="_top"
                onClick={this.facebookLogin}
                data-use-continue-as="true"
            >
                {children}
            </button>
        )
    }
}
