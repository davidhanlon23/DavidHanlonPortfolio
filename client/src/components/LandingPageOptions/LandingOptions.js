import React /*, { Component }*/ from "react";
import "animate.css/animate.min.css";
// import "./LandingOptions.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, CardMedia, Typography,Grid, Paper } from '@material-ui/core';

export default class LandingOptions extends React.Component {
 
  render() {
    
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
      <section className="page-section" id="hero-banner">

        <div className="row">
          {/*Landing Option 1 Development */}
          <div className="column" id="hero-banner-developer">
            <Paper id="landing-option">
              <div>

              </div>
              <Typography className="landing-page-text" variant='p'>
                 If you are here looking to view my developer skills, resume, projects, &amp; work experience click the
                 button below.
              </Typography>
              <Button href="/developer" className="landing-page-button" variant="contained"> Developer </Button>
            </Paper>
          </div>

          {/*Landing Option 2 Business */}
          <div className="column" id="hero-banner-entrepreneur">
            <Paper id="landing-option">
              <div>

              </div>
              <Typography className="landing-page-text" variant='p'>
                 If you are here looking to view my developer skills, resume, projects, &amp; work experience click the
                 button below.
              </Typography>
              <Button href="/business" className="landing-page-button" variant="contained"> Entrepreneur </Button>
            </Paper>
          </div>

          { /*Landing Option 3 Photography */}
          <div className="column" id="hero-banner-photographer">
          <Paper id="landing-option">
              <div>

              </div>
              <Typography className="landing-page-text" variant='p'>
                 If you are here looking to view my developer skills, resume, projects, &amp; work experience click the
                 button below.
              </Typography>
              <Button href="/photography" className="landing-page-button" variant="contained"> Photographer </Button>
            </Paper>
          </div>

        </div>
      </section>
      </ScrollAnimation>
      
    );
  }
}