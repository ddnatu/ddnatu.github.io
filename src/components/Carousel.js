import React from 'react'

// Data for carousel
const carouselSlidesData = [
    {
        content: 'Prerna',
        source: '../assets/Prerna.jpg',
    },
    {
        content: 'Bhargavi',
        source: '../assets/Bhargavi.jpg',
    },
    {
        content: 'Devdutta',
        source: '../assets/DD.jpg',
    },
    {
        content: 'Parth',
        source: '../assets/Parth.jpg',
    },
    {
        content: 'Phalgun',
        source: '../assets/Phalgun.jpg',
    },
]
//const carouselContainer = document.querySelector('.carousel-container')

class CarouselLeftArrow extends React.Component {
    render() {
        return (
            <button
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <span className="fa fa-2x fa-angle-left" />
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
                <span className="fa fa-2x fa-angle-right" />
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
            >
                <img
                    src={this.props.slide.source}
                    alt={this.props.slide.content}
                    height="300"
                    width="400"
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

        this.state = {
            activeIndex: 0,
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
