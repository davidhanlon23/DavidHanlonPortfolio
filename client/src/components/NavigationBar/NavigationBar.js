import React/*,{ Component } */from "react";
import { NavLink } from "react-router-dom";
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
                      <li><NavLink exact ={true} activeClassName='active' to ='/'>Home</NavLink></li>
                      <li><NavLink exact ={true} activeClassName='active' to ='/#AboutMe'>About Me</NavLink></li>
                      <li><NavLink exact ={true} activeClassName='active' to ='/#Experience'>Experience</NavLink></li>
                      {/* <li><NavLink exact ={true} activeClassName='active' to ='/#Projects'>Projects</NavLink></li>  */}
                      <li><NavLink exact ={true} activeClassName='active' to ='/#References'>References</NavLink></li>                    
                      <li><NavLink exact ={true} activeClassName='active' to ='/#ContactMe'>Contact Me</NavLink></li>                    
 
                  </ul>
               </div>
            </nav>
         </header>
    );
  }
}
