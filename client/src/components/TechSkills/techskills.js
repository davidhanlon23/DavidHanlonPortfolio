import React /*, { Component }*/ from "react";

export default class TechSkills extends React.Component {

  render() {
    return (
      <section className="page-section" id="technical">
          <div className="container py-5">
            
            <div className="row">
                <div className="col-12 col-md-12">
                  <h1 className="secondary-section-header pb-4 text-center">
                      Technical Skills
                  </h1>
                  <div className="col-12 p-0 text-center">
                    <p className="font-weight-bold">Used Most Frequently</p>
                 </div>
                </div>
            </div>

            
                <div className="text-center d-flex flex-wrap justify-content-around">
                   
                    <div className="dev-icon-container">
                      <i className="devicon-nodejs-plain colored"></i>
                      <p>NodeJS</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-react-original colored"></i>
                        <p> ReactJS</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-express-original colored"></i>
                        <p> ExpressJS</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-java-plain colored"></i>
                        <p> Java</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-html5-plain colored"></i>
                        <p> HTML5</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-css3-plain colored"></i>
                        <p> css3</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-bootstrap-plain colored"></i>
                        <p> Bootstrap</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-javascript-plain colored"></i>
                        <p> JavaScript</p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-mongodb-plain colored"></i>
                        <p> MongoDB </p>
                    </div>

                    <div className="dev-icon-container">
                        <i className="devicon-github-plain colored"></i>
                        <p> GitHub </p>
                    </div>
                </div>
                
            

            <div className="row">
              <div className="col-12 p-0 text-center">
                <p className="font-weight-bold">Familiar With</p>
              </div>
            </div>

         
              <div className="text-center d-flex flex-wrap justify-content-around">
                
                <div className="dev-icon-container">
                  <i className="devicon-google-plain colored"></i>
                  <p> Google App Script </p>
                </div>

                <div className="dev-icon-container">
                  <i className="devicon-mysql-plain colored"></i>
                  <p> MySQL </p>
                </div>

                <div className="dev-icon-container">
                  <i className="devicon-python-plain colored"></i>
                  <p> Python </p>
                </div>
{/* 
                 <div className="dev-icon-container">
                  <i class="fab fa-invision"></i>
                  <p> Sketch UI/UX </p>
                </div> 
                 */}


              </div>
           



            <div className="row">
              <div className="col-12 p-0 text-center">
                <p className="font-weight-bold">Future Interests</p>
              </div>
            </div>

            
              <div className="text-center d-flex flex-wrap justify-content-around">

                <div className="dev-icon-container">
                  <i className="devicon-swift-plain colored"></i>
                  <p> Swift </p>
                </div>

                <div className="dev-icon-container">
                  <i className="devicon-angularjs-plain colored"></i>
                  <p> AngularJS </p>
                </div>

                <div className="dev-icon-container">
                  <i className="devicon-php-plain colored"></i>
                  <p> PHP </p>
                </div> 

              </div>
            



          </div>
          
      </section>
    );
  }
}

/*




*/