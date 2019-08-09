import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "./Login.css";

export default class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
  }
  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="DevMatch" />
          <input
            placeholder="Digite seu usuário do GitHub"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
