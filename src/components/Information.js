import React from 'react'
import { Link } from '@reach/router'

class Information extends React.Component {
    state = {
        gallery: true,
    }
    render() {
        return (
            <Link to={'/information/'} className="pet">
                <div> Information </div>
            </Link>
        )
    }
}

export default Information
