import React /*, { Component }*/ from "react";
import "animate.css/animate.min.css";
// import "./LandingOptions.css";
import ScrollAnimation from 'react-animate-on-scroll';
//import { Button, Typography, Paper } from '@material-ui/core';
import ProductValues from '../LandingPageOptions/ProductValues';
export default class LandingOptions extends React.Component {
 
  render() {
    
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
        <ProductValues/>
      </ScrollAnimation>
      
    );
  }
}