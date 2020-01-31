//Team Boujee

//Investments

//My Real Estate Listings

//My properties for rent

//Maybe something about Mac & MP



import React /*, { Component }*/ from "react";
//import { BrowserRouter as Link } from "react-router-dom";
//import PropTypes from "prop-types";
import {  withRouter} from "react-router-dom";

import { connect } from "react-redux";



class BusinessLanding extends React.Component {
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
          <h1> Business LP</h1>
      </div>
     
    );
  }
}
BusinessLanding.propTypes = {

};
const mapStateToProps = state => ({
 
});
export default connect(
  mapStateToProps,
)(withRouter(BusinessLanding));
