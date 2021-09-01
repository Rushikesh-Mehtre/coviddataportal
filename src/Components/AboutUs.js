import React, { Component } from "react";

export class About extends Component {
  
  render() {
    document.title = `Covid Data Portal | About`

    return (
      <div>
        <div
          class="card text-center about-body"
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <div class="card-body">
            <h1 class="card-title">About Us</h1>
            <p class="card-text">
              This ReactJS project has been developed by Rushikesh Mehtre
              (contact no.-7303133973) solely for the learning purpose.It uses
              fetched data from COVID data API provided by postman API and rootnet API (link - <a href="https://api.rootnet.in/" target="_blank" style={{padding:"5px 10px",backgroundColor:"transparent",color:"tomato"}}>rootnet API</a> ).This web
              application is not intended to use for any commerical purpose.I
              will not be responsible for any hardships occured due to use of
              data from this website.
            </p>
            <a
              href="https://www.linkedin.com/in/rushikesh-mehtre-122a81217/"
              target="_blank"
              class="btn btn-dark"
            >
              Connect me on LinkedIn !
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
