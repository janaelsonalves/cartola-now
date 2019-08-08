import React, { Component } from "react";
import Axios from "axios";

const flexCol = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
    // Axios.get("/cartola/auth/time/info", {
    //   headers: {
    //     "X-GLB-Token":
    //   }
    // }).then(res => console.log(res.data)).catch(err => console.log(err))
  }

  render() {
    return <div style={flexCol}>Home</div>;
  }
}

export default Home;
