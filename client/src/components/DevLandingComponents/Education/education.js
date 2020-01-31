import React /*, { Component }*/ from "react";
import phsLogo from "../../../images/phsLogo.jpeg";
import wthsLogo1 from "../../../images/wthsLogo1.jpg";
import towsonLogo2 from "../../../images/towsonLogo2.jpeg";
//import eduClipArt from "../../images/educationClipArt.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Education extends React.Component {

  render() {
    return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}> 
    <section className="page-section" id="education">
        <div className="container mb-5 mt-5">
            
            <div className="row">
                <div className="col-12 col-md-12">
                <h1 className="secondary-section-header pb-4 text-center">
                    Education
                </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <p className="h4 mb-4 font-weight-bold">High School</p> 
                    <p className=""><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>  &nbsp; August 2011 - May 2015</p>
                    <p className=""><FontAwesomeIcon icon={faGraduationCap} color="#000000"/>&nbsp; GPA: 4.25/5.00</p>
                </div>
                <div className="col-12 col-md-4">
                    {/* <img alt="Education clip art" src={eduClipArt} height="250px" width="250px"></img> */}
                </div>
            </div>

            <div className="row">    
                <div id="school1" className="col-12 col-md-8">    
                    <a href="http://www.pocomokehighschool.org/"><h3>Pocomoke High School</h3></a>
                    
                    <p> Pocomoke High School is the primary high school I was enrolled at where I studied 
                        Core classes and AP Computer Science </p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="PHS logo" src={phsLogo} height="175px" width="175px"></img>
                </div>

              </div>

            <div className="row">
                <div id="school2"className="col-12 col-md-8">
                <p className=""><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>  &nbsp; August 2011 - May 2015</p>
                    <p className=""><FontAwesomeIcon icon={faGraduationCap} color="#000000"/>&nbsp; GPA: 4.25/5.00</p>
                   
                    <a href="https://worcestertechhs.com/"><h3>Worcester Technical High School</h3></a>
                    <p> Worcester Technical High School is vocational high school in Worcester
                        County, Maryland that offers STEM and trade related courses. I attended 
                        WTHS to complete the 4 year Pre-Engineering program while concurrently 
                        attending Pocomoke High School</p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="WTHS logo" src={wthsLogo1} height="175px" width="175px"></img>
                </div>
            </div>  

            <div className="row">
                <div  id="school3" className="col-12 col-md-8">
                    {/* <h2>College</h2> */}
                    <p className="h4 mb-4 font-weight-bold">College</p> 
                    <p><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp; August 2015 - May 2019</p>
                    <p className=""><FontAwesomeIcon icon={faGraduationCap} color="#000000"/>&nbsp; GPA: 3.16/4.00</p>  
                    
                    {/* <div id="school3"></div> */}
                    <a href="https://www.towson.edu"><h3>Towson University</h3></a>
                    <p> Towson University is a Liberal Arts university in northern 
                        Baltimore County, Maryland where I completed my Bachelor's degree
                        in Computer Science</p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="Towson logo" src={towsonLogo2} height="175px" width="175px"></img>
                </div>
            </div>
              

        </div>       
      </section>    
    </ScrollAnimation> 
      
    );
  }
}