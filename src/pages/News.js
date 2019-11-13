import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';

const apiKey = '4fa0750590044d02b2fd3a2a3c407f39';
const countryCodeIndia = 'in';
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.getLatestFeed = this.getLatestFeed.bind(this)
    }

    componentDidMount() {
        this.getLatestFeed();
    }

    getLatestFeed() {
        let res = axios.get(
            `https://newsapi.org/v2/top-headlines?country=${countryCodeIndia}&apiKey=${apiKey}`
        );
        res.then((data) => {
            console.log('response from the news api', data);
        });
        res.catch((error) => {
            console.log('error', error);
        });
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
