import React /*, { Component }*/ from "react";
//import PropTypes from "prop-types";
import {  withRouter} from "react-router-dom";
import { connect } from "react-redux";
import LandingOptions from '../../components/LandingPageOptions/LandingOptions';
//import { logoutUser } from "../actions/authActions";
import "./LandingPage.css";

class LandingPage extends React.Component {
    constructor() {
      super();
      this.state = {
          isMounted: false
      };
  
      this.componentDidMount = this.componentDidMount.bind(this);
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
  
    render() {
      return (
        <div>
            <LandingOptions/>
        </div>
       
      );
    }
  }
  LandingPage.propTypes = {
  };
  const mapStateToProps = state => ({
  });
  export default connect(
    mapStateToProps,
  )(withRouter(LandingPage));
  