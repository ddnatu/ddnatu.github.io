import React from 'react'
import { Link } from '@reach/router'
import '../styles/navbar.scss'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="logo">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </h1>
                <ul className="main-nav">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/chatroom">
                        <li>Chatroom</li>
                    </Link>
                </ul>
            </header>
        )
    }
}

export default Navbar
