import React /*, { Component }*/ from "react";
import cybraryLogo from '../../images/cybrary3.png'
import etsLogo from '../../images/etsLogo.png';
import sproutLogo1 from '../../images/sproutLogo1.png';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Experience extends React.Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}> 
      <section className="page-section" id="experience">

      <div className="container mb-5 mt-5">
        

      <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="secondary-section-header pb-4 text-center">
                Internship Experience
            </h1>
          </div>
        </div>
      

        <div className="row" id="workInfo">
          <div id="company1" className="col-12 col-md-8">
            <a href="https://www.cybrary.it"><h2>Cybrary</h2></a>
            <p>
              <i>
                Cybrary is an IT/Cybersecurity training and career development platform
                supporting over 2 million users
                worldwide
              </i>
            </p>
            
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;June 2018 - August 2018</li>
              <li className="list-inline-item text-right"> <FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;Greenbelt, MD</li>
            
            
            </ul>
          
            <ul>
              <li>
                  Automated the Executive Dashboard using JavaScript and Google
                  technologies and APIs which resulted in reducing errors and
                  increasing productivity among leadership through the elimination of
                  manual entry.
              </li>
              <li>
                  Increased the frequency of the automated Executive Dashboard from
                  monthly to weekly which provided the leadership team with more
                  accurate and timely information on which to act.
              </li>
              <li>
                  Conducted Data Exports for requested customers which resulted in
                  improved customer relations
              </li>
            </ul>

          </div>
          <div className="col-12 col-md-4">
            <img alt="Cybrary Logo" src={cybraryLogo} height="250px" width="250px"></img>
          </div>
        </div>

        <div className="row" id="workInfo">
          <div id="company2" className="col-12 col-md-8">
            <a href="http://www.elavonpayments.com"><h2>Electronic Transaction Systems (ETS)</h2></a>
            <p>
              <i>
                ETS, now known as Elavon Payments and Emoney is an international corporation that offers merchant
                services to clients seeking comprehensive Payment Card
                Industry (PCI)-compliant merchant processing
                solutions.
              </i>
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;June 2017 - August 2017</li>
              <li className="list-inline-item text-right"> <FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;Berlin, MD</li>   
            </ul>
          
            <ul>
              <li>
                  Most of internship consisted of individual research using online 
                  resources such as Udemy and Codecademy learning NodeJS, Ionic framework and 
                  hybrid mobile app development practices
              </li>
              <li>
                  Conducted research on competitors for upper management which resulted in
                  more informative marketing decisions
              </li>
              <li>
                  Learned how to use Sketch, and InVision in order to create UI/UX prototypes
              </li>
              <li>
                  Consulted with Software Development team to aid in uncovering any bugs on
                  the company’s website, and EMoney virtual wallet mobile application
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <img alt="ETS Logo" src={etsLogo} height="250px" width="250px"></img>
          </div>
        </div>


        <div className="row" id="workInfo">
          <div id="company3" className="col-12 col-md-8" >
            <a href="https://www.sproutcreatives.com"><h2>Sprout Creatives</h2></a>
            <p>
              <i>
                Sprout Creatives is a full-service website and graphic
                design firm that specializes in growing small businesses.
              </i>
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;June 2015 - August 2015</li>
              <li className="list-inline-item text-right"> <FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;Berlin, MD</li>
            
            
            </ul>
            
            
            <ul>
              <li>
                Used HTML5, CSS, JavaScript, Business Catalyst, Adobe’s
                Photoshop, and Adobe’s DreamWeaver, to assist in the developing,
                deploying, and maintaining of customers’ websites
              </li>
              <li>
                Backed up files from websites to local directories for instant
                recovery in the event of website failure
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <img alt="Sprout Creatives Logo" src={sproutLogo1} height="250px" width="250px"></img>
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