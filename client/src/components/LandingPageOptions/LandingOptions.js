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
            {/* <Button color="default">
                <Typography id="">Developer</Typography>
            </Button>
            <Button color="default">
                <Typography id="">Business</Typography>
            </Button>
            <Button color="default">
                <Typography id="">Photography</Typography>
            </Button> */}
            <h2>hello</h2>
      </section>
      </ScrollAnimation>
      
    );
  }
}