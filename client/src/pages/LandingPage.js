

import React /*, { Component }*/ from "react";
//import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from "prop-types";
import {  withRouter} from "react-router-dom";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import PageIntro from "../components/PageIntro/pageIntro";
//import resume from "../downloads/PostGradResume2019PDF.pdf";
import AboutMe from "../components/AboutMe/aboutMe";
import Education from "../components/Education/education";
import Experience from "../components/Experience/experience";
//import Projects from "../components/Projects/projects";
//import References from "../components/References/references";
import TechSkills from "../components/TechSkills/techskills";
import ContactMe from "../components/ContactForm/contactForm";
import Footer from "../components/Footer/footer";
//import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <PageIntro></PageIntro>
      <AboutMe></AboutMe>
      <Education></Education>
      <Experience></Experience> 
      <TechSkills></TechSkills>  
      <ContactMe></ContactMe>
      <div></div>
      <div className="backToTop" style={{opacity: 0.85}}>
        <Router>
          <Route to="#intro"><i className="fa fa-arrow-up"> </i></Route>
        </Router>
          
       
        
      </div>
      
      {/* <div className="download" style={{opacity:0.85}}>
        <button  type="button" ><a href={resume} download>RESUME</a> </button>
        <div id='button'></div>
      </div> */}

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
