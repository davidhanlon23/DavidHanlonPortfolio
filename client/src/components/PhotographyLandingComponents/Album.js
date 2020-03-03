import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import InstagramEmbed from 'react-instagram-embed';
import ContactForm from '../ContactForm/ContactForm';
import MainFooter from "../Shared/MainFooter";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  container:{
    [theme.breakpoints.down('md')]:{
      margin:'auto',
      padding:'10px',
      position:'absolute',
      width: '100%',
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Button href="/">
            <NavigateBeforeIcon className={classes.icon}/>
            <Typography variant="h6" color="inherit" noWrap>
                Back To Home
            </Typography>
          </Button>
       
        </Toolbar>
      </AppBar>
      {/* <main> */}
        {/* Hero unit */}
        {/* <div className={classes.heroContent}> */}
          <Container className={classes.container} maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              My Photos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here you can follow the beginning of my photography journey. 
              Most of my photography is shot with a Nikon D3400 camera, various lens, 
              and finished with very minimal editing. All of my photos can be found on 
              my instagram account @davidmhanlon
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="#contact">
                    Contact Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://www.instagram.com/davidmhanlon/">
                    View Instagram
                  </Button>
                </Grid>
              </Grid>
            </div>
          {/* </Container> */}
        {/* </div> */}
        {/* <Container className={classes.container}> */}
          <Grid container spacing={10} justify='center'>
            
            <Grid item xs={12} md={4}>
              <InstagramEmbed
                url='https://instagr.am/p/B5Ou3tFBtpZ/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <InstagramEmbed
                url='https://instagr.am/p/B43R11shIhB/' 
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <InstagramEmbed
                url='https://instagr.am/p/B4kSGwNhQpz/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Grid>

          </Grid>
        {/* </Container> */}
       
        {/* <Container className={classes.container}> */}
          <Grid container spacing={10} justify='center'>
            
            <Grid item xs={12} md={4}>
              <InstagramEmbed
                url='https://instagr.am/p/B4aIOv7B69l/'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <InstagramEmbed
                url='https://instagr.am/p/B3h7ViIhE39/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* <InstagramEmbed
                url='https://instagr.am/p/B4kSGwNhQpz/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              /> */}
            </Grid>

          </Grid>
        {/* </Container> */}
        
        {/* <Container className={classes.container}> */}
            <ContactForm id="contact"/>
        {/* </Container> */}
      {/* </main> */}
      {/* Footer */}
      <MainFooter/>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

/*

<Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://instagr.am/p/B5Ou3tFBtpZ/"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>


*/