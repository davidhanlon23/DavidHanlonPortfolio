import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '../Shared/Typography';
import landingImg from "../../images/15403.jpg";

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    //backgroundImage: `url(${landingImg})`,
    backgroundSize: 'cover',
    height: '10%!important',
    backgroundColor: theme.palette.secondary.light,
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

function HeroBanner(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          
          <Grid item xs={12} md={4}>
            <div>
                <h3>Some Heading</h3>
                <p>some text about the heading to make the heading better
                If you are here looking to view my developer skills, resume, projects

                </p>
                <Button>Learn More</Button>
            </div>
          </Grid>
          
          <Grid item xs={12} md={4}>
           
          </Grid>

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