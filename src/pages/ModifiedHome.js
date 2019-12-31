import React from 'react'
import { Link } from '@reach/router'
//import { useFormik } from 'formik';

import Carousel from './../pages/Carousel'
import './../styles/homeModified.scss';

/* eslint-disable */
const validEmailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Modified extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            username: null,
            fullname: null,
            email: null,
            password: null,
            errors: {
                fullName: '',
                email: '',
                password: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // Newsletter Signup form handle function.
    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'fullname':
                errors.fullname =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors);
        })


    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.username + this.state.fullname + this.state.email);
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <Link to={'/home-modified/'} >
                <div className="home-container">
                    <div className="home-story">
                        <section id="carousel">
                            <Carousel style={{ textAlign: 'center', marginTop: 100 }} />
                        </section>

                        <section id="purpose">
                            <div className="content">
                                <h1 className="title">What is Natu Kulvruttant?</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </section>
                        <section id="info">
                            <div className="content">
                                <h1 className="title">Where does it come from?</h1>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.</p>
                            </div>
                        </section>
                        <section id="accomplishments">
                            <div className="content">

                                <h1 className="title">What to Explore!?</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </section>
                        <section id="history">
                            <div className="content">

                                <h1 className="title">Our History?</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </section>

                        <section id="newsletter">
                            <div className="subscribeHeading">
                                <span>Subscribe to our newsletter!</span>
                            </div>
                            <div className="subscriptionFormContainer">
                                <form onSubmit={this.handleSubmit} className="subscriptionForm">
                                    <label>
                                        Name:
                                     <input name="fullname" type="text" value={this.state.fullname} onChange={this.handleChange} />
                                    </label>
                                    {errors.fullName.length > 0 &&
                                        <span className='error'>{errors.fullName}</span>}
                                    <label>
                                        Email:
                                     <input
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleChange} />
                                    </label>
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                                    <button onClick={this.handleSubmit}>Submit</button>
                                </form>
                            </div>
                        </section>
                        <section className="featured-quote wide dark">
                            <div className="container">
                                <blockquote>
                                    <p>“Working with &amp;yet is always a delightful experience. You want them on your team.”</p>
                                    <footer>Allen Pike, Steamclock Software</footer>
                                </blockquote>
                            </div>
                        </section>
                    </div>
                </div>
            </Link>
        )
    }
};

export default Modified;