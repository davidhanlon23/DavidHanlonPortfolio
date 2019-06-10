import React from 'react';
import {NavLink} from 'react-router-dom';
//import { Link } from "react-router-dom";

const Footer = () => {
    return (
   
    
    <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5> Quick Links</h5>
					<ul className="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i className="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/#PageIntro'><i className="fa fa-angle-double-right"></i> Page Intro</NavLink></li>
                        <li><NavLink exact ={true} to ='/#AboutMe'><i className="fa fa-angle-double-right"></i> About Me</NavLink></li>
                        <li><NavLink exact ={true} to ='/#Experience'><i className="fa fa-angle-double-right"></i>Experience</NavLink></li>
						<li><NavLink exact ={true} to ='/#ContactMe'><i className="fa fa-angle-double-right"></i>Contact Me</NavLink></li>
						<li><NavLink exact ={true} to ='/admin'><i className="fa fa-angle-double-right"></i>Admin Login</NavLink></li>
						{/* <li><Link to="/admin">Admin Login</Link></li> */}
                    </ul>
				</div>
				<div className="col-xs-12 col-sm-8 col-md-8">
					<h5> Something relevant here</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					   qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
					   amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat.

					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/david.r.hanlon.5"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://github.com/davidhanlon23"><i className="fa fa-github"></i></a></li>
						<li className="list-inline-item"><a href="https://www.linkedin.com/in/david-hanlon-4a6b1b131/"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/kingdavid.xo"><i className="fa fa-instagram"></i></a></li>
						
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
		
					<p className="h6">This Portfolio was constructed by David M. Hanlon</p>
				</div>
				<hr></hr>
			</div>	
		</div>
	</section>
    
        
    );
};

export default Footer;