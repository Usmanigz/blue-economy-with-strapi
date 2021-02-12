import Layout from "../components/layout";
import {useState} from 'react'

function ContactUs() {

    const [errorMessage, setErrorMessage] = useState('');

    const contactUs = async event => {
        
        event.preventDefault()

        const res = await fetch(
            'https://demo-blueeconomy.herokuapp.com/contact-uses',
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    phone_number: event.target.phone.value,
                    message: event.target.message.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        
        const result = await res.json()

        if(result.id !== null){
            setErrorMessage('The form have been submit successfully')
            event.target.name.value = ""
            event.target.email.value = ""
            event.target.phone.value = ""
            event.target.message.value = ""
        } else {
            setErrorMessage('Some issue while saving records')
        }
    }

    return(
        <Layout>
            {/* Contact Form*/}
            <section id="contact" className="section-1 form contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h2 className="text-center">Contact Us</h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="contacts">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-phone-alt mr-2"></i>
                                            +92 (341) 783-2040
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-envelope mr-2"></i>
                                            igz.iwd.29@gmail.com
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Faisalabad, Punjab Pakistan
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-5 align-self-center text">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <h4>{errorMessage}</h4>
                                    {/* <form action="php/form.php" id="nexgen-simple-form" className="nexgen-simple-form"> */}
                                    <form onSubmit={contactUs}>
                                        <input type="hidden" name="section" value="nexgen_form" />

                                        <input type="hidden" name="reCAPTCHA" />
                                        {/* <!-- Remove this field if you want to disable recaptcha --> */}

                                        <div className="row form-group-margin">
                                            <div className="col-12 col-md-6 m-0 p-2 input-group">
                                                <input type="text" name="name" className="form-control field-name" placeholder="Name" />
                                            </div>
                                            <div className="col-12 col-md-6 m-0 p-2 input-group">
                                                <input type="email" name="email" className="form-control field-email" placeholder="Email" />
                                            </div>
                                            <div className="col-12 col-md-12 m-0 p-2 input-group">
                                                <input type="text" name="phone" className="form-control field-phone" placeholder="Phone" />
                                            </div>
                                            
                                            <div className="col-12 m-0 p-2 input-group">
                                                <textarea name="message" className="form-control field-message" placeholder="Message" ></textarea>
                                            </div>
                                            <div className="col-12 col-12 m-0 p-2 input-group">
                                                <span className="form-alert"></span>
                                            </div>
                                            <div className="col-12 input-group m-0 p-2">
                                                <button type="submit" className="btn primary-button"> SEND</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactUs