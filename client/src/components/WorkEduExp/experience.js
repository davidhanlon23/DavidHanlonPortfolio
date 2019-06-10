import React /*, { Component }*/ from "react";


export default class Experience extends React.Component {

  render() {
    return (
      <section>
        <div className="col s12 center-align">
        <h1>EDUCATION</h1>
          <h2>High School</h2>
              <h3>Pocomoke High School</h3>
              <p>some info bout the moke</p>

              <h3>Worcester Technical High School</h3>
              <p>some info bout the worTech</p>

          <h2>College</h2> 
              <h3>Towson University</h3>
              <p>Some info bout college</p>
        </div>

        <div className="col s12 center-align">
          <h1>INTERNSHIP EXPERIENCE</h1>
          <h2>Cybrary</h2>
          <h2>Electronic Transaction Systems (ETS)</h2>
          <h2>Sprout Creatives</h2>
        </div>
       

          

       
        
      </section>
    );
  }
}