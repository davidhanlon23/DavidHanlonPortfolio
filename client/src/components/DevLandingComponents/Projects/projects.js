//https://lovecalculator-bb0e8.web.app/
//Ionic Love calculator
import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import loveCalc from "../../images/loveCalc.png";
import expenseTracker from "../../images/expenseTracker.png";
import chatApp from "../../images/chatApp.png";

//Do Personal Projects Section (3-4)
//School Projects Dection (3-4)


export default class Projects extends React.Component {
    render(){
        return(
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
                <section className="page-section" id="projects"> 
                    <div className="container py-5">
                        
                        <div className="row">
                            <div className="col-12 col-md-12">
                             <h1 className="secondary-section-header pb-4 text-center">Projects</h1>
                            </div>
                        </div>
                        
                        <div className="text-center d-flex flex-wrap justify-content-around">
                            <div>
                                <img alt="" height="500px" width="250px" src ={loveCalc}></img>
                                <p className="font-weight-bold">Love Calculator</p>
                            </div>

                            <div>
                                <img alt="" height="500px" width="250px" src ={expenseTracker}></img>
                                <p className="font-weight-bold">Expense Tracker</p>
                            </div>

                            <div>
                                <img alt="" height="500px" width="250px" src ={chatApp}></img>
                                <p className="font-weight-bold">Chat App</p>
                            </div>

                            <div>
                            <img alt="" height="500px" width="250px" src ={chatApp}></img>
                                <p className="font-weight-bold">Uptown</p>
                            </div>

                        </div>
                        
                    
                        <div className="text-center d-flex flex-wrap justify-content-around"></div>
                    
                    
                    
                    
                    
                    
                    </div>
                </section>
            </ScrollAnimation>

           
        );
    }
}

/**
 * <div className="text-center d-flex flex-wrap justify-content-around"></div>
 */