import React from 'react'
import { Link } from '@reach/router'

class News extends React.Component {
    state = {
        news: true,
    }
    render() {
        return (
            <Link to={'/news/'} className="pet">
                <div> News </div>
            </Link>
        )
    }
}

export default News
