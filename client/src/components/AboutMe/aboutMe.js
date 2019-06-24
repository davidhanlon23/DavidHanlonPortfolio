import React /*, { Component }*/ from "react";
import profilePicture from "../../images/profilePic.png";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class AboutMe extends React.Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
      <section className="page-section" id="about">
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-12 col-md-12">
              <h1 className="secondary-section-header pb-4 text-center">
                  About Me
              </h1>
             
              
            </div>
          </div>

          

          <div className="row">
            <div className="col-12 col-md-8">
              <p className="h4 mb-4 font-weight-bold">Hi, I am David Hanlon.</p>
              <div className="content-spacing gray-600">
                <p>I am an ambitious, optimistic, and dependable Junior Level Software Engineer with a passion for developing software and pushing the limits of my current programming and problem solving skillset. </p>
                <br></br>
                <p> I am seeking to become a versatile and selfless member of a high performing software engineering team that is passionate about developing and deploying quality software in order to help your organization to reach its optimal vision.</p>
                <br></br>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img alt="profile" src ={profilePicture} height="300px" width="300px"></img>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12">
              <p className="h5 mb-4 font-weight-bold">Favorite Quotes</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
             
                <p>“If you always do what you’ve always done, you’ll always be where you’ve always been.” - T.D. Jakes</p>
                <br></br>
                <p>“Ambition is the path to success. Persistence is the vehicle you arrive in.” – Bill Bradley</p>
                <br></br>
                
            </div>
            <div className="col-12 col-md-6">
              <p>“A dream you dream alone is only a dream. A dream you dream together is reality.” —Yoko Ono</p>
              <br></br>
              <p>“Everybody has a dream, but not everybody has a grind.” -Eric Thomas</p>
              <br></br>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 col-md-12">
              <ul className="list-unstyled list-inline social text-left">
                <li className="list-inline-item"><a href="https://www.facebook.com/david.r.hanlon.5"><i className="fa fa-facebook" id="facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/davidhanlon23"><i className="fa fa-github twitter" id="github"></i></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/david-hanlon-4a6b1b131/"><i className="fa fa-linkedin" id="linkedin"></i></a></li>
                {/* <li className="list-inline-item"><a href="https://www.instagram.com/kingdavid.xo"><i className="fa fa-instagram" id="instagram"></i></a></li>  */}
                <li className="list-inline-item"><a href="mailto:davidhanlon23@gmail.com"><i className="fa fa-envelope" id="email"></i></a></li>

              </ul>
            </div>
          </div>

        </div>
      </section>
      </ScrollAnimation>
      
    );
  }
}