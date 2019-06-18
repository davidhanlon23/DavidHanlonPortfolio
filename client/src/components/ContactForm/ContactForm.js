import React /*, { Component }*/ from "react";
//import styles from "../ContactForm/contactForm.css";
function emailCheck(email) {
  var valid = /\S+@\S+\.\S+/;
  return { email: !valid.test(email) };
}

export default class ContactMe extends React.Component {
  constructor() {
    super();
    this.state = { email: "", touched: { email: false } };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email } = this.state;
    alert(`Signed up with email: ${email}`);
  };

  canBeSubmitted() {
    const errors = emailCheck(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  render() {
    const errors = emailCheck(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <section className="page-section" id="contact">
        <div className="container mb-5 mt-5">
        
        <div className="row">
            <div className="col-12 col-md-12">
              <h1 className="secondary-section-header pb-4 text-center">Contact Me</h1>
              {/* <h1 className="black-section-header-center pb-5 text-center"> CONTACT ME </h1>
              <h1 class="black-section-header"></h1> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="h4 mb-4 font-weight-bold">Contact Information</p>
             <ul className="list-unstyled list-inline social contact-list quick-links">
               <li><a href="tel:443-735-2450"><i className="fa fa-phone fa-3x"></i> <p> 443-735-2450</p></a></li>
               <li><a href="mailto:davidhanlon23@gmail.com"><i className="fa fa-envelope fa-1x"></i><p>davidhanlon23@gmail.com</p></a></li>
               <li><a href="https://www.google.com/maps/dir//6011+York+Rd,+Baltimore,+MD+21212/@39.3620816,-76.6100315,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c80562556432f3:0xab3a3ca46237d0e8!2m2!1d-76.609533!2d39.366449"><i className="fa fa-location-arrow fa-1x"></i><p>  6011 York, Rd. Baltimore, Md 21212</p> </a></li>
               
             </ul>  
            </div>
            
            <div className="col-12 col-md-6">
            <p className="h4 mb-4 font-weight-bold">Contact Form</p>
              <form action="/api/contact/contactus" method="post">
                <input type="text" name="firstName" id="firstName" placeholder="First Name" className="form-control input-lg" required/>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-control input-lg" required/>
                <input type="email" name="email" id="email" placeholder="Email Address" className="form-control input-lg" required value={this.state.email} onChange={this.handleEmailChange} onBlur={this.handleBlur("email")}/>
                <input type="tel" name="phone" id="phone" placeholder="###-###-####" className="input-field col s12" />
                <input type="text" name="help" id="help" placeholder="How can I assist you?" className="form-control input-lg" required/>
                <button
                            style={{
                              width: "150px",
                              borderRadius: "3px",
                              letterSpacing: "1.5px",
                              marginTop: "2rem",
                              zIndex: 0
                            }}
                            disabled={isDisabled} type="submit" className="btn btn-large waves-effect waves-light hoverable black accent-3">
                            {" "}Contact Us{" "}
                  </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    );
  }
}
//export default ContactMe;
//className="col-12 col-md-8"
/*
 <form action="/api/contact/contactus" method="post">
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className="form-control input-lg"
                            required
                          />
                        </div>
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            className="form-control input-lg"
                            required
                          />
                        </div>
                        <div className="input-field col s12">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="form-control input-lg"
                            required
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            onBlur={this.handleBlur("email")}
                          />
                        </div>
                        <div className="input-field col s12">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="###-###-####"
                            className="input-field col s12"
                            required
                          />
                        </div>
                        <div className="input-field col s12">
                          <input
                            type="text"
                            name="help"
                            id="help"
                            placeholder="How can we help?"
                            className="form-control input-lg"
                            required
                          />
                        </div>
                        <button
                          style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "2rem",
                            zIndex: 0
                          }}
                          disabled={isDisabled}
                          type="submit"
                          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                          {" "}
                          Contact Us{" "}
                        </button>
                      </form>
*/
