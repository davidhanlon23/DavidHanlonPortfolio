import React/*,{ Component } */from "react";
//import { NavLink } from "react-router-dom";

//new...
import { HashLink as Link } from 'react-router-hash-link';
//new

export default class NavigationBar extends React.Component  {

  render() {
    return (
         <header>
           
            <nav >
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                  David M. Hanlon
               </div>
               <div className="menu">
                  <ul>
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/'>Home</NavLink></li> */}
                      {/* <li><a  href='/'> Home</a></li> */}
                      
                      <li><Link   to="#about"> About Me </Link></li>
                      <li><Link   to="#education"> Education </Link></li>
                      <li><Link   to="#experience"> Experience</Link></li>
                      <li><Link   to="#contact"> Contact Me</Link></li>
                      
                      {/* <li><a activeClassName='active' href="#about"> About Me</a></li>
                      <li><a activeClassName='active' href="#education"> Education</a></li>
                      <li><a activeClassName='active' href="#experience"> Experience</a></li>
                      <li><a activeClassName='active' href="#contact"> Contact Me</a></li> */}

                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#AboutMe'>About Me</NavLink></li> */}
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#Experience'>Experience</NavLink></li> */}
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#Projects'>Projects</NavLink></li>  */}
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#References'>References</NavLink></li>*/}
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#ContactMe'>Contact Me</NavLink></li>*/}
 
                  </ul>
               </div>
            </nav>
         </header>
    );
   
  }
}
