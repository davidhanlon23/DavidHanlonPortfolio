import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import MainFooter from "../Shared/MainFooter";
export default class BusinessPageContainer extends React.Component {
 
  render() {
    
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
        <h2>Hello Business</h2>
        <MainFooter/>    {/*Section 3 of Landing Page */}
      </ScrollAnimation>
      
    );
  }
}