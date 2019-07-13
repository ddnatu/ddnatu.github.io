import React from 'react'
import { Link } from '@reach/router'

class Connect extends React.Component {
    state = {
        Connect: true,
    }
    render() {
        return (
            <Link to={'/connect/'} className="pet">
                <div> Connect </div>
            </Link>
        )
    }
}

export default Connect
