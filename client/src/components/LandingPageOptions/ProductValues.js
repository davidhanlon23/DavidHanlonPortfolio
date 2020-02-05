import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '../Shared/Typography';
import devSvg from "../../images/html.svg";
import entrepreneurSvg from "../../images/entrepreneur.svg";
import amateurPhotographerSvg from "../../images/photographer.svg";
import landingBg from "../../images/silhouette-of-mountains-1323550.jpg"

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${landingBg})`,
    backgroundSize: 'cover',
    // backgroundColor: theme.palette.secondary.light,
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

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src={landingBg}
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
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
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
              <Button href="/developer" className="landing-page-button" variant="contained"> My Resume &amp; Work </Button>
            </div>
          </Grid>
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
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
              <Button href="/business" className="landing-page-button" variant="contained"> My Businesses </Button>
            </div>
          </Grid>
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
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
              <Button href="/photography" className="landing-page-button" variant="contained"> My Photos </Button>
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

export default withStyles(styles)(ProductValues);