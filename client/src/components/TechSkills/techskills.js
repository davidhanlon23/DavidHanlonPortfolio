import React /*, { Component }*/ from "react";

export default class TechSkills extends React.Component {

  render() {
    return (
      <section className="page-section" id="technical">
          <div className="container mb-5 mt-5">
            
            <div className="row">
                <div className="col-12 col-md-12">
                <h1 className="secondary-section-header pb-4 text-center">
                    Technical Skills
                </h1>
                </div>
            </div>

            <div className="row">
                <div className="text-center d-flex flex-wrap justify-content-around">
                    <div className="dev-icon-container">
                        <i className="devicon-angularjs-plain colored"></i>
                        <p>Angular</p>
                    </div>
                    <div className="dev-icon-container">
                        <i className="devicon-angularjs-plain colored"></i>
                    </div>
                   
                </div>
                
            </div>
          </div>
          
      </section>
    );
  }
}