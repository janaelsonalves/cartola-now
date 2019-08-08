import React, { Component } from "react";
import Axios from "axios";

const flexCol = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      glbId: "",
      id: "",
      userMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div style={flexCol}>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit} style={flexCol}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  doLogin() {
    let data = {
      captcha: "",
      payload: {
        email: this.state.email,
        password: this.state.password,
        serviceId: 4728
      }
    };
    Axios.post("/api/auth", data, {
      headers: { "Content-type": "application/json" }
    })
      .then(res => {
        this.setState(res.data);
        // this.props.glbId = res.data["glbId"];
        // this.props.id = res.data["id"];
        // this.props.userMessage = res.data["userMessage"];
        this.props.onAuth({
          glbId: res.data["glbId"],
          id: res.data["id"],
          userMessage: res.data["userMessage"]
        });
      })
      .catch(err => console.log(err));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.doLogin();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}

export default LoginForm;
