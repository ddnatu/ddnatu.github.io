import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
import './../styles/news.scss';

const apiKey = '4fa0750590044d02b2fd3a2a3c407f39';
const countryCodeIndia = 'in';
const newsClass = ['one', 'two', 'three', 'four', 'five', 'six'];
const divStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`
})

function NewsTemplates(props) {
    //const newsClass = props.newsClass;
    const newsFeed = props.newsFeed;
    console.log('newsFeed', newsFeed);
    const newsItems = newsFeed.map((values, i) =>
        <div className={newsClass[i % 6]} key={values.sourceId + i}>
            <span>{values.title}</span>
            <span><img className="newsThumbnail" key={values.urlToImage} src={values.urlToImage} alt="" /></span>
            <span>{values.description}</span>
            <div>{values.content}</div>
        </div>
    );
    return (
        <div className="grid-container">{newsItems}</div>
    );
}

function normalizeNewsFeed(data) {
    let newsFeed = data;
    let normalizedFeed = [];

    normalizedFeed = newsFeed.map((val) => {
        return {
            title: val.title,
            author: val.author,
            content: val.content,
            description: val.description,
            sourceId: val.source.id,
            sourceName: val.source.name,
            url: val.url,
            urlToImage: val.urlToImage,
            publishedAt: val.publishedAt
        }
    });
    return normalizedFeed;
}

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsFeed: []
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
        res.then((response) => {
            try {
                console.log('response from the news api', response);
                let data = response.data;
                let newsFeed = normalizeNewsFeed(data.articles);
                this.setState({
                    newsFeed
                })
            } catch (e) {
                console.log('exception in news normalize function', e);
            }
        });
        res.catch((error) => {
            console.log('error', error);
        });
    }




    render() {
        const { newsFeed } = this.state;

        return (
            <Link to={'/news/'} className="pet">
                <NewsTemplates newsFeed={newsFeed} newsClass={newsClass} />
            </Link>
        )
    }
}

export default News
