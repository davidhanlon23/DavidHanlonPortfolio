import React /*, { Component }*/ from "react";
import "animate.css/animate.min.css";
// import "./LandingOptions.css";
import ScrollAnimation from 'react-animate-on-scroll';
// import { Button, CardMedia, Typography,Grid, Paper } from '@material-ui/core';

export default class LandingOptions extends React.Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
      <section className="page-section" id="hero-banner">
        <div className="row">

          <div className="column" id="hero-banner-developer">
      
          </div>

          <div className="column" id="hero-banner-entrepreneur">

          </div>

          <div className="column" id="hero-banner-photographer">

          </div>

        </div>
      </section>
      </ScrollAnimation>
      
    );
  }
}