

import React /*, { Component }*/ from "react";

import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import Footer from "../components/Footer/footer";


class Landing extends React.Component {
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
    //this.state.isMounted = false;
    this.setState({
      isMounted: false,
   });

  }

  componentWillUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>

         <div>
            <Link to="/"></Link>
         </div> 
        <h2>Back To Home</h2>
        
        <div className="backToTop" style={{opacity: 0.85}}>
            <a href="/">
            <i className="fa fa-arrow-up"></i>
            </a>
        </div>
            
        <Footer></Footer>

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
