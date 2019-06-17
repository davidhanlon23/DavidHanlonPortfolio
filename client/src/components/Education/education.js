import React /*, { Component }*/ from "react";
import phsLogo from "../../images/phsLogo.jpeg";
import wthsLogo1 from "../../images/wthsLogo1.jpg";
import towsonLogo2 from "../../images/towsonLogo2.jpeg";
//import eduClipArt from "../../images/educationClipArt.jpg";
export default class Education extends React.Component {

  render() {
    return (
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
                    <p className=""> Combined GPA:</p>
                </div>
                <div className="col-12 col-md-4">
                    {/* <img alt="Education clip art" src={eduClipArt} height="250px" width="250px"></img> */}
                </div>
            </div>

            <div className="row">    
                <div className="col-12 col-md-8">    
                    <h3>Pocomoke High School</h3>
                    <p> Pocomoke High School is the primary high school I was enrolled at where I studied 
                        Core classes and AP Computer Science </p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="PHS logo" src={phsLogo} height="250px" width="250px"></img>
                </div>

              </div>

            <div className="row">
                <div className="col-12 col-md-8">
                    <h3>Worcester Technical High School</h3>
                    <p> Worcester Technical High School is vocational high school in Worcester
                        County, Maryland that offers STEM and trade related courses. I attended 
                        WTHS to complete the 4 year Pre-Engineering program while concurrently 
                        attending Pocomoke High School</p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="WTHS logo" src={wthsLogo1} height="250px" width="250px"></img>
                </div>
            </div>  

            <div className="row">
                <div className="col-12 col-md-8">
                    {/* <h2>College</h2> */}
                    <p className="h4 mb-4 font-weight-bold">College</p> 
                    <p className=""> Combined GPA: 3.16/4.00</p>  
                    <h3>Towson University</h3>
                    <p> Towson University is a Liberal Arts university in northern 
                        Baltimore County, Maryland where I completed my Bachelor's degree
                        in Computer Science</p>
                </div>
                <div className="col-12 col-md-4">
                    <img alt="Towson logo" src={towsonLogo2} height="250px" width="250px"></img>
                </div>
            </div>
              

        </div>       
      </section>
    );
  }
}