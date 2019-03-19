import React from 'react'
import '../styles/navbar.scss'

class Navbar extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="logo">
                    <a href="#sdf">Flexbox</a>
                </h1>
                <ul className="main-nav">
                    <li>
                        <a href="#sdf">Home</a>
                    </li>
                    <li>
                        <a href="#sdf">About</a>
                    </li>
                    <li>
                        <a href="#sdf">Portfolio</a>
                    </li>
                    <li>
                        <a href="#sdf">Contact</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Navbar
