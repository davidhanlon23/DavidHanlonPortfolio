import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { Button } from "@material-ui/core";
import Button from '../Shared/Button';
import Typography from '../Shared/Typography';
import landingImg from "../../images/insta3.jpg";

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${landingImg})`, //1600 x 500 should be size of Hero Image
    backgroundSize: 'cover',
    height: '100vh!important',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
    //align: 'right',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
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
  learnMore:{
    maxWidth:'60%',
    textAlign:'center',
    backgroundColor:theme.palette.primary.dark,
    // '&:hover': {
    //   color: '#efefef',
    //   backgroundColor:"black"
		// },
  },
  alignRight:{
    [theme.breakpoints.down('sm')]:{
      position:'absolute',
      width: '100%',
      textAlign:'center',
      margin:'auto',
      padding:'30px',
    },
    //[theme.breakpoints.down('md')]:{},
    position:'absolute',
    right:'0px',
    width: '40%',

  },
});

function HeroBanner(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5} >
          
          {/*First Column*/}
          <Grid item xs={12} md={4}>
            <div className={classes.alignRight} >
              <Typography variant="h3">
                {'Hi there,'}
              </Typography>
              <Typography variant="body1">
                {'My name is David Hanlon, and I am a full-stack web developer, entrepreneur, and a very... very amateur photographer. Click the button below to learn more about me and my work.'}
              </Typography>
              <p></p>
                <Button className={classes.learnMore} href="#landing-options">Learn More</Button>
            </div>
          </Grid>
          
          {/*Second Column */}
          <Grid item xs={12} md={4}>
          </Grid>

          {/*Third Column */}
          <Grid item xs={12} md={4}>  
          </Grid>

        </Grid>
      </Container>
    </section>
  );
}

HeroBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroBanner);