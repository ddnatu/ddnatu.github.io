import React from 'react'
import { Link } from '@reach/router'

class Gallery extends React.Component {
    state = {
        gallery: true,
    }
    render() {
        return (
            <Link to={'/gallery/'} className="pet">
                <div> Gallery </div>
            </Link>
        )
    }
}

export default Gallery
