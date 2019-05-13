// import React, { Component } from "react";
// class Landing extends Component {
//   render() {
//     return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Build</b> a login/auth app with the{" "}
//               <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
//               scratch
//             </h4>
//             <p className="flow-text grey-text text-darken-1">
//               Create a (minimal) full-stack app with user authentication via
//               passport and JWTs
//             </p>
//             <br />
//             <a
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px"
//               }}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Register
//             </a>
//             <a
//               style={{
//                 marginLeft: "2rem",
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px"
//               }}
//               className="btn btn-large waves-effect white hoverable black-text"
//             >
//               Log In
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Landing;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { /*Link,*/ withRouter } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
        isMounted: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    this.state.isMounted = false;
  }

  componentWillUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            {/* <Link
              to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 white-text"
            >
              Register
            </Link> */}
            <Link
              to="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Landing));
