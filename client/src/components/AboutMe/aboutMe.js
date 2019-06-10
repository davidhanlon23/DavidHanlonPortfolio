import React /*, { Component }*/ from "react";


export default class AboutMe extends React.Component {

  render() {
    return (
      <section>
        <div className="container mb-5 mt-5">
          <div className="row">
            <div id="about" className="col-12 col-md-8">
              <h1 className="secondary-section-header pb-4">
                  About Me
              </h1>
              <p className="h4 mb-4 font-weight-bold">Hi, I am David Hanlon,</p>
              <div className="content-spacing gray-600">
                <p>I am an ambitious, optimistic, and dependable Junior Level Software Engineer with a passion for developing software and pushing the limits of my current programming and problem solving skillset. </p>
                <p>Seeking to become a versatile and selfless member of a high performing software engineering team that is passionate about developing and deploying quality software in order to help your organization to reach its optimal vision</p>
                <p></p>
              </div>
 
            </div>
          </div>
        </div>
      </section>
    );
  }
}