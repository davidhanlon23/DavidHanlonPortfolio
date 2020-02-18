import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { Button } from "@material-ui/core";
import Button from '../Shared/Button';
import Typography from '../Shared/Typography';
import devSvg from "../../images/html.svg";
import entrepreneurSvg from "../../images/entrepreneur.svg";
import amateurPhotographerSvg from "../../images/photographer.svg";
//import landingBg from "../../images/silhouette-of-mountains-1323550.jpg"
//import landingImg from "../../images/15403.jpg";

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    //backgroundImage: `url(${landingImg})`,
    //backgroundColor:'white',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.secondary.light, //Theme.js file contains these colors
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
   
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    paddingTop:theme.spacing(5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    opacity:.4,
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section id="landing-options" className={classes.root}>
      <Container className={classes.container}>
        {/*To add background IMG to info-graphic section, uncomment the code below, and import an image*/}    
        {/* <img
          src={landingBg}
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        
        <Grid container spacing={10}>
          {/*Info-graphic 1*/}         
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={devSvg}
                alt="Dev Icon"
              />
              <Typography variant="h6" className={classes.title}>
                Developer
              </Typography>
              <Typography variant="body1">
                {"I obtained my Bachelor's in COSC at Towson University where I learned Java, and taught myself NodeJS. "}
                {'If you are here looking to view my developer skills, resume, projects, & work '}
                {'experience, click the button below. '}
                
                
              </Typography>
              <Button href="/developer" variant="contained">Portfolio</Button>
            </div>
          </Grid>

          {/*Info-graphic 2*/}
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={entrepreneurSvg}
                alt="Entrepreneur"
              />
              <Typography variant="h6" className={classes.title}>
                Entrepreneur
              </Typography>
              <Typography variant="body1">
                {'I have always been somewhat of an Entrepreneur at heart and have invested time'}
                {'into myself to work on things that I enjoy outside of developing.'}
                {'To learn more about my businesses and investments, click the button below.'}
              </Typography>
              <Button href="/business" variant="contained">Businesses</Button>
            </div>
          </Grid>

          {/*Info-graphic 3*/}
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={amateurPhotographerSvg}
                alt="Photographer"
              />
              <Typography variant="h6" className={classes.title}>
                Amateur Photographer
              </Typography>
              <Typography variant="body1">
                {'Photography is something I have began growing a passion for recently with an'}
                {' increased interest in traveling. I currently use a Nikon D3400. Click the button'}
                {' below if you would like to view my photography portfolio and progression.'}
              </Typography>
              <Button href="/photography" variant="contained">Photos</Button>
            </div>
          </Grid>  

        </Grid>
      </Container>

    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(ProductValues);
export default withStyles(styles, { withTheme: true })(ProductValues);