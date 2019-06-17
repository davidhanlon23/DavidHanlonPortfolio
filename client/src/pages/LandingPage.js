

import React /*, { Component }*/ from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { /*Link,*/ withRouter } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
//import PageIntro from "../components/PageIntro/pageIntro";
import AboutMe from "../components/AboutMe/aboutMe";
import Education from "../components/Education/education";
import Experience from "../components/Experience/experience";
//import Projects from "../components/Projects/projects";
//import References from "../components/References/references";
import TechSkills from "../components/TechSkills/techskills";
import ContactMe from "../components/ContactForm/contactForm";
import Footer from "../components/Footer/footer";
//import styles from './LandingPageCSS/landing.css';

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
        {/* <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                  <div className="col s12 center-align">
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					   qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
					   amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat
                    
                  </div>
                </div>
                
          </div> */}
      <AboutMe></AboutMe>
      <Education></Education>
      <Experience></Experience> 
      <TechSkills></TechSkills>  
      <ContactMe></ContactMe>
      <div></div>
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
