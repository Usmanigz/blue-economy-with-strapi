import Layout from "../components/layout";

function ContactUs() {
    return(
        <Layout>
            {/* Contact Form*/}
            <section id="contact" class="section-1 form contact">
                <div class="container">
                    <h1>This module is in progress ... </h1>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="contacts">
                                <h4>Example Inc.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-phone-alt mr-2"></i>
                                            +1 (305) 1234-5678
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-envelope mr-2"></i>
                                            hello@example.com
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="fas fa-map-marker-alt mr-2"></i>
                                            Main Avenue, 987
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="mt-2 btn outline-button" data-toggle="modal" data-target="#map">VIEW MAP</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-8 pr-md-5 align-self-center text">
                            <div class="row intro">
                                <div class="col-12 p-0">
                                    <span class="pre-title m-0">Send a message</span>
                                    <h2>Get in <span class="featured"><span>Touch</span></span></h2>
                                    <p>We will respond to your message as soon as possible.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 p-0">
                                    <form action="php/form.php" id="nexgen-simple-form" class="nexgen-simple-form">
                                        <input type="hidden" name="section" value="nexgen_form" />

                                        <input type="hidden" name="reCAPTCHA" />
                                        {/* <!-- Remove this field if you want to disable recaptcha --> */}

                                        <div class="row form-group-margin">
                                            <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                <input type="text" name="name" class="form-control field-name" placeholder="Name" />
                                            </div>
                                            <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                <input type="email" name="email" class="form-control field-email" placeholder="Email" />
                                            </div>
                                            <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                <input type="text" name="phone" class="form-control field-phone" placeholder="Phone" />
                                            </div>
                                            <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                <i class="icon-arrow-down mr-3"></i>
                                                <select name="info" class="form-control field-info">
                                                    <option value="" selected disabled>More Info</option>
                                                    <option>Audit & Assurance</option>
                                                    <option>Financial Advisory</option>
                                                    <option>Analytics and M&A</option>
                                                    <option>Middle Marketing</option>
                                                    <option>Legal Consulting</option>
                                                    <option>Regulatory Risk</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div class="col-12 m-0 p-2 input-group">
                                                <textarea name="message" class="form-control field-message" placeholder="Message" ></textarea>
                                            </div>
                                            <div class="col-12 col-12 m-0 p-2 input-group">
                                                <span class="form-alert"></span>
                                            </div>
                                            <div class="col-12 input-group m-0 p-2">
                                                <a class="btn primary-button">SEND</a>
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