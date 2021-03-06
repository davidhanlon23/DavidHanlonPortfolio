

import React /*, { Component }*/ from "react";
//import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from "prop-types";
import {  withRouter} from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import PageIntro from "../components/PageIntro/pageIntro";

import AboutMe from "../components/AboutMe/aboutMe";
import Education from "../components/Education/education";
import Experience from "../components/Experience/experience";
//import Projects from "../components/Projects/projects";
//import References from "../components/References/references";
import TechSkills from "../components/TechSkills/techskills";
import ContactMe from '../components/ContactForm/ContactForm';
import Footer from "../components/footer/footer";
import WorkExperience from "../components/Experience/workExperience";


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
      <WorkExperience></WorkExperience>
      <TechSkills></TechSkills>
      {/* <Projects></Projects>   */}
      <ContactMe></ContactMe>
      <div></div>
      <div className="backToTop" style={{opacity: 0.85}}>
    
          <a href="#intro"><i className="fa fa-arrow-up"> </i></a>
      
          
       
        
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
