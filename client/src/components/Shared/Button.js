import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles(theme => ({
  root: {
    
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    // fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.primary.light,
    display:'block',
    maxWidth:'100%',
    margin:'auto',
    marginTop:'50px',
    // borderRadius:'10px',

    '&:hover': {
      color: theme.palette.secondary.light,
      backgroundColor:theme.palette.secondary.main,
      boxShadow:'0px 3px 10px rgba(0,0,0,.7)',
    },
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}))(Button);

/*

button:{
    backgroundColor:'red',
    color:'green',
    // display: block !important;
    // max-width: 60% !important;
    // margin:auto !important;
    // color:white!important;
    // background-color: #c8b4ef!important;
    // margin-top:50px !important;
  },

    display: block !important;
    max-width: 60% !important;
    margin:auto !important;
    color:white!important;
    background-color: #b4e3ff!important;

*/