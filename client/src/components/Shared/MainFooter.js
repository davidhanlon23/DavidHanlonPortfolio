import React from 'react';
import Typography from './Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const styles = theme => ({
	socialIcons:{
		color:'black',
		'&:hover': {
			color: '#efefef',
		},

	},
	footerText:{
		color:'black',
	},
});
function MainFooter(props) {
	const { classes } = props;
    return (
        <div>
           <div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a className={classes.socialIcons} href="https://www.facebook.com/david.r.hanlon.5"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a className={classes.socialIcons} href="https://github.com/davidhanlon23"><i className="fa fa-github"></i></a></li>
						<li className="list-inline-item"><a className={classes.socialIcons} href="https://www.linkedin.com/in/david-hanlon-4a6b1b131/"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a className={classes.socialIcons} href="https://www.instagram.com/davidmhanlon"><i className="fa fa-instagram"></i></a></li>
						
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
		
					<Typography className={classes.footerText}variant="body1">This Portfolio was constructed by Towson University Graduate, David M. Hanlon</Typography>
					
				</div>
				<hr></hr>
			</div>	
        </div>
    );
}; 
MainFooter.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainFooter);

