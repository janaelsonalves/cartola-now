import React, { Component } from "react";
import Axios from "axios";

const flexCol = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

class About extends Component {
  render() {
    return <div style={flexCol}>About</div>;
  }
}

export default About;
