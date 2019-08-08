import React from 'react'
import { Link } from '@reach/router'

class Places extends React.Component {
    state = {
        gallery: true,
    }
    render() {
        return (
            <Link to={'/places/'} className="pet">
                <div> Places </div>
            </Link>
        )
    }
}

export default Places
