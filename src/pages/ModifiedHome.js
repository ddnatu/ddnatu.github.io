import React from 'react'
import { Link } from '@reach/router'
import { useFormik } from 'formik';

import './../styles/homeModified.scss';

class Modified extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {

        const SignupForm = () => {
            // Pass the useFormik() hook initial form values and a submit function that will
            // be called when the form is submitted
            const formik = useFormik({
                initialValues: {
                    email: '',
                },
                onSubmit: values => {
                    alert(JSON.stringify(values, null, 2));
                },
            });
            return (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <button type="submit">Submit</button>
                </form>
            );
        };

        return (
            <Link to={'/home-modified/'}>
                <div className="home-container">
                    <div className="home-story">
                        <section id="purpose">
                            <div className="content">
                                <h1 className="title">&amp;yet hereskjre <strong>strengthens</strong> your customer relationships through <strong>creative</strong> technology</h1>
                                <p>We work exclusively with g sdfsdfrowth tea asdfasdfsdafms of tecsafadsfh compani  es with people-first values.</p>
                            </div>
                        </section>
                        <section id="info">
                            <h1 className="title">&amp;yet hereskjre <strong>strengthens</strong> your customer relationships through <strong>creative</strong> technology</h1>
                            <p>We work exclusively with g sdfsdfrowth tea asdfasdfsdafms of tecsafadsfh compani  es with people-first values.</p> </section>
                        <section id="accomplishments">
                            <h1 className="title">&amp;yet hereskjre <strong>strengthens</strong> your customer relationships through <strong>creative</strong> technology</h1>
                            <p>We work exclusively with g sdfsdfrowth tea asdfasdfsdafms of tecsafadsfh compani  es with people-first values.</p>
                        </section>
                        <section id="history">
                            <h1 className="title">&amp;yet hereskjre <strong>strengthens</strong> your customer relationships through <strong>creative</strong> technology</h1>
                            <p>We work exclusively with g sdfsdfrowth tea asdfasdfsdafms of tecsafadsfh compani  es with people-first values.</p>
                        </section>
                        <section id="newsletter">
                            <div>Subscribe to our newsletter!</div>
                            <SignupForm />
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