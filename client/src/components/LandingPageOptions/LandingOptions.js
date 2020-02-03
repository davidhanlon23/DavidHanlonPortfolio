import React /*, { Component }*/ from "react";
import "animate.css/animate.min.css";
// import "./LandingOptions.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, CardMedia, Typography,Grid, Paper } from '@material-ui/core';

export default class LandingOptions extends React.Component {
 
  render() {
    
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
      <section className="page-section" id="hero-banner">
        <div className="row">

          <div className="column" id="hero-banner-developer">
            <Paper id="landing-option">
              <div>
                
              </div>
              <Typography variant='p'>
                 If you are here looking to view my developer skills, resume, projects, &asmp; work experience click the
                 button below.
              </Typography>
              <Button href="/developer" className="landing-page-button" variant="contained"> Developer </Button>
            </Paper>
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