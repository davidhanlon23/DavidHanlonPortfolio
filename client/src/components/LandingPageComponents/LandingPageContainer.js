import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ProductValues from './ProductValues';
import HeroBanner from "./HeroBanner";
import MainFooter from "../Shared/MainFooter";
export default class LandingPageContainer extends React.Component {
 
  render() {
    
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
        <HeroBanner/>    {/*Section 1 of Landing Page*/}
        <ProductValues/> {/*Section 2 of Landing Page */}
        <MainFooter/>    {/*Section 3 of Landing Page */}
      </ScrollAnimation>
      
    );
  }
}