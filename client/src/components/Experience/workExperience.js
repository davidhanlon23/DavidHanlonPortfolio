import React /*, { Component }*/ from "react";
import sbdLogo from '../../images/sbdLogo.jpg';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class WorkExperience extends React.Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}> 
      <section className="page-section" id="workExperience">

      <div className="container mb-5 mt-5">
        

      <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="secondary-section-header pb-4 text-center">
                Work Experience
            </h1>
          </div>
        </div>
      
        {/*Stanley Black & Decker */}
        <div className="row" id="workInfo">
          <div id="company4" className="col-12 col-md-8">
            <a href="https://www.stanleyblackanddecker.com/"><h2>Stanley Black &amp; Decker</h2></a>
            <p>
              <i>
                Stanley Black &amp; Decker is a growing fortune 500 company that is constantly expanding
                into different global emerging markets.
              </i>
            </p>
            <h6>Systems Analyst</h6>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;August 2019 - Present</li>
              <li className="list-inline-item text-right"> <FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;Middle River, MD</li>
            
            
            </ul>
          
            <ul> 

                {/* TODO: Still more to add... */}
                {/* Magellan Project */}
              <li>
                Conducted junior level full-stack (PostgreSQL, Express, ReactJS, NodeJS) development on Stanley Security’s Business to Business &amp; Business to Consumer E-Commerce applications. 
              </li>
              <li>
                Improved Dev-ops practices, while fixing bugs throughout the application and assisting in the creation of the admin module to control product junction object mappings, display status, user role based access, and “scope of work” fulfillment for the B2C application.
              </li>
                {/* Hybris Project */}
              <li>
              While apart of the NodeJS project, I simultaneously started onboarding for the Java, Java Spring, &amp; Hybris SAP based E-commerce project.
              </li>

                {/* Project Management */}
              <li>
                  Assisted in managing and communicating business requirements to offshore resources.
              </li>
              <li>
                  
              </li>
            </ul>

          </div>
          <div className="col-12 col-md-4">
            <img alt="Stanley Logo" src={sbdLogo} height="250px" width="250px"></img>
          </div>
        </div>


      </div>         
      </section>      
      </ScrollAnimation>
      
    );
  }
}
/*


              
              
*/