import React from 'react'
import { Link } from '@reach/router'

class Contact extends React.Component {
    state = {
        portfolio: true,
    }
    render() {
        return (
            <Link to={'/contact/'}>
                <div> Contact us </div>
            </Link>
        )
    }
}

export default Contact
