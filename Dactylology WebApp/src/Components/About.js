import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const bio2 = this.props.data.bio2;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="History">
        <Fade duration={1000}>
          <div className="row">
            <div>
              <h1 style={{ fontSize: "30px", color: "#fff" }}>History</h1>

              <p style={{ fontSize: "20px" }}>{bio}</p>
              <p style={{ fontSize: "20px" }}>{bio2}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
