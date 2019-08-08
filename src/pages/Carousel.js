import React from 'react'
// get our fontawesome imports
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import request from 'request'
// Data for carousel
const carouselSlidesData = [
    {
        content: 'Devdutta Natu',
        source: '../assets/DD.jpg',
    },
    {
        content: 'Prerna Natu',
        source: '../assets/Prerna.jpg',
    },
    {
        content: 'Bhargavi Natu',
        source: '../assets/Bhargavi.jpg',
    },
    {
        content: 'Parth Natu',
        source: '../assets/Parth.jpg',
    },
    {
        content: 'Phalgun Natu',
        source: '../assets/Phalgun.jpg',
    },
]

class CarouselLeftArrow extends React.Component {
    render() {
        return (
            <button
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                {/* <span className="fa fa-2x fa-angle-left" /> */}
            </button>
        )
    }
}

class CarouselRightArrow extends React.Component {
    render() {
        return (
            <button
                href="#"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <FontAwesomeIcon icon={faArrowRight} />
                {/* <span className="fa fa-2x fa-angle-right" /> */}
            </button>
        )
    }
}

class CarouselIndicator extends React.Component {
    render() {
        return (
            <li>
                <button
                    className={
                        this.props.index == this.props.activeIndex
                            ? 'carousel__indicator carousel__indicator--active'
                            : 'carousel__indicator'
                    }
                    onClick={this.props.onClick}
                />
            </li>
        )
    }
}

class CarouselSlide extends React.Component {
    render() {
        return (
            <li
                className={
                    this.props.index == this.props.activeIndex
                        ? 'carousel__slide carousel__slide--active'
                        : 'carousel__slide'
                }
                onClick={this.props.action}
                role="presentation"
            >
                <img
                    src={this.props.slide.source}
                    alt={this.props.slide.content}
                    height="500"
                    width="900"
                />
                <p>
                    <strong className="carousel-slide__author">
                        {this.props.slide.content}
                    </strong>
                </p>
            </li>
        )
    }
}

// Carousel wrapper component
class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.goToSlide = this.goToSlide.bind(this)
        this.goToPrevSlide = this.goToPrevSlide.bind(this)
        this.goToNextSlide = this.goToNextSlide.bind(this)
        this.request = this.request.bind(this)
        this.getDetails = this.getDetails.bind(this)

        this.state = {
            activeIndex: 0,
            username: this.props.username,
            userid: this.props.userid,
            accessToken: this.props.connectionStatus,
            connectionStatus: this.props.connectionStatus,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.goToNextSlide(event), 10000)
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index,
        })
    }

    goToPrevSlide(e) {
        e.preventDefault()

        let index = this.state.activeIndex
        let slides = carouselSlidesData
        let slidesLength = slides.length

        if (index < 1) {
            index = slidesLength
        }

        --index

        this.setState({
            activeIndex: index,
        })
    }

    goToNextSlide() {
        //e.preventDefault()

        let index = this.state.activeIndex
        let slides = carouselSlidesData
        let slidesLength = slides.length - 1

        if (index === slidesLength) {
            index = -1
        }

        ++index

        this.setState({
            activeIndex: index,
        })
    }

    request(method, opts) {
        console.log('coming here', this.props.userid)
        //let newOpts = Object.assign(opts)
        return new Promise((resolve, reject) => {
            //url: 'graph.facebook.com' + '/v3.2/' + newOpts.id + '/ HTTP/1.1'
            // url: 'graph.facebook.com' +
            //     '/v3.2/' +
            //     this.state.userid +
            //     '/ HTTP/1.1'
            // success: data => {
            //     resolve(data)
            // }
            // error: err => {
            //     reject(err)
            // }
            request(
                'https://graph.facebook.com' +
                    '/v3.2/me/photos?access_token=' +
                    this.props.accessToken,
                function(error, response, body) {
                    // in addition to parsing the value, deal with possible errors
                    if (error) return reject(error)
                    try {
                        // JSON.parse() can throw an exception if not valid JSON
                        resolve(JSON.parse(body))
                    } catch (e) {
                        reject(e)
                    }
                }
            )
        })
    }

    getDetails(e) {
        console.log(e)
        var r = this.request('GET', e)
        console.log(r)
        r.then(data => {
            console.log('data', data)
        })
    }

    render() {
        return (
            <div
                className="carousel"
                style={{ textAlign: 'center', marginTop: 50 }}
            >
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {carouselSlidesData.map((slide, index) => (
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                            action={this.getDetails}
                        />
                    ))}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {carouselSlidesData.map((slide, index) => (
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex == index}
                            onClick={e => this.goToSlide(index, e)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Carousel
