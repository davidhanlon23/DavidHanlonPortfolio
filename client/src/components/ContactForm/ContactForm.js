import React /*, { Component }*/ from "react";

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
      <section>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                  <div className="col s12 center-align">
                    <h4>Contact Me Today  </h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
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
                        {/* <footer>
                          <div>
                            By submitting your information, you agree to our Terms of
                            Use and Privacy Policy.
                          </div>
                        </footer> */}
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
                    </div>
                  </div>
                </div>
              </div>
      </section>
      
    );
  }
}
//export default ContactMe;
