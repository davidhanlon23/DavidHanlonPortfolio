import React from 'react';
import {Link} from "react-router-dom";
const ThankYou = () => {
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>Thank You - </h4>
            <p className="flow-text grey-text text-darken-1">
            I am excited to see you found my Portfolio! I will get back to you at my earliest conveinence and I look forward to chatting with you!
            </p>
            <br />
           
                  <Link style={{
                              textDecoration:'none',
                              color:'#fff'
                            }} to="/"> 
                            
                            <button
                            style={{
                              width: "150px",
                              borderRadius: "3px",
                              letterSpacing: "1.5px",
                              marginTop: "2rem",
                              zIndex: 0
                            }}
                            type="submit" className="btn btn-large waves-effect waves-light hoverable black accent-3">
                            {" "}Home{" "}
                            </button>
                  </Link>
          </div>
        </div>
      </div>
    );
};

export default ThankYou;