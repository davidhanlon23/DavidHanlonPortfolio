import React /*, { Component }*/ from "react";
//import PropTypes from "prop-types";
import {  withRouter} from "react-router-dom";
import { connect } from "react-redux";
import LandingPageContainer from '../../components/LandingPageComponents/LandingPageContainer';

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
      this.setState({
        isMounted: false,
     });
  
    }
  
    render() {
      return (
        <div>
            <LandingPageContainer/>
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
  