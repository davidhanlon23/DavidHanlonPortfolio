import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../Shared/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
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
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/client/public/imgs/computerBg.jpeg"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="../../images/html.svg"
                alt="Dev Icon"
              />
              <Typography variant="h6" className={classes.title}>
                Developer
              </Typography>
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/client/src/images/entrepreneur.svg"
                alt="Entrepreneur"
              />
              <Typography variant="h6" className={classes.title}>
                Entrepreneur
              </Typography>
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="../../images/photographer.svg"
                alt="Photographer"
              />
              <Typography variant="h6" className={classes.title}>
                Amateur Photographer
              </Typography>
              <Typography variant="h5">
                {'If you are here looking to view my developer skills, resume, projects'}
                {', & work experience click the button below.'}
              </Typography>
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