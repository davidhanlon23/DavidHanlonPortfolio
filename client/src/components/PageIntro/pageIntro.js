import React /*, { Component }*/ from "react";
//import {Link} from "react-router-dom";
import resume from "../../downloads/PostGradResume2019PDF.pdf";
//import Button from 'react-bootstrap/Button';
export default class PageIntro extends React.Component {

  render() {
    return (
      <section className="page-section" id="intro">
          
         
              {/* <Button variant="primary" download={resume}>Primary</Button> */}
              {/* <a href={resume} download>Download this shit</a>  */}
              {/* <Button variant="primary"> <a href={resume} download>Download this shit</a> </Button> */}
              {/* <a href={resume} download>Download this shit</a>  */}
              {/* <div id="wrapper">
                <button  type="button" ><a href={resume} download>RESUME</a> </button>
                <a href={resume} download><button  type="button" >RESUME</button></a> 
              </div> */}
              {/* <Link></Link> */}
              <a href={resume} download>
             
              <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable black accent-3"
                  >
                     RESUME
                  </button>
              </a>
              
        
      </section>
    );
  }
}//end 

