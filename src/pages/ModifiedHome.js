import React from 'react'
import { Link } from '@reach/router'
import { useFormik } from 'formik';

import Carousel from './../pages/Carousel'
import './../styles/homeModified.scss';

class Modified extends React.Component {

    state = {
        isModifiedHome: true
    }

    constructor(props) {
        super(props);
    };

    render() {

        // Signup form handle function
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
                        <section id="carousel">
                            <div className="content">
                                <Carousel style={{ textAlign: 'center', marginTop: 100 }} />
                            </div>
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
                            <div className="content">
                                <h1 className="title">Daily Content</h1>
                                <p>Subscribe to our newsletter!</p>
                                <SignupForm />
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