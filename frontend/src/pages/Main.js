import React, { Component } from "react";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { id: this.props.match.params.id };
  }
  render() {
    return (
      <div className="main-container">
        <img src={logo} alt="DevMatch" />
        <ul>
          <li>
            <img
              src="https://avatars3.githubusercontent.com/u/18118086?v=4"
              alt=""
            />
            <footer>
              <strong>Fabricio Bedin</strong>
              <p>Full Stack Developer RoR • JS</p>
            </footer>

            <div className="buttons">
              <button type="button">
                <img src={dislike} alt="Dislike" />
              </button>
              <button type="button">
                <img src={like} alt="Like" />
              </button>
            </div>
          </li>
        </ul>
        {this.props.match.params.id}
      </div>
    );
  }
}
