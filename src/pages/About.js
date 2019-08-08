import React from 'react'
import { Link } from '@reach/router'

class About extends React.Component {
    state = {
        about: true,
    }
    render() {
        return (
            <Link to={'/about/'} className="pet">
                <div> About us </div>
            </Link>
        )
    }
}

export default About
