import React, { Component } from "react";

export default class FormCom extends Component {
  constructor() {
    super();
  }
  state = { email: "", password: "", error: "", Perror: "", fruits: "" };

  // handleChange = (e) => {
  //   let val = e.target.name;
  //   let myvalue = e.target.value;
  //   this.setState({ [val]: myvalue });
  // };
  validator() {
    if (!this.state.email > 0 && !this.state.password > 0) {
      this.setState({ error: "Email and Password required" });
    } else if (!this.state.email > 0) {
      this.setState({ error: "Email required" });
    } else if (!this.state.password > 0) {
      this.setState({ Perror: "Password required" });
    } else {
      return true;
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.Emailerror);
    if (this.validator()) {
      alert("form submit done");
    }
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <br />
          <br />
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <strong>
            <p style={{ color: "red" }}>{this.state.error}</p>
          </strong>
          <br />
          <br />
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <strong>
            <p style={{ color: "red" }}>{this.state.Perror}</p>
          </strong>
          <br />
          <br />
          <br />
          <select onChange={(e) => this.setState({ fruits: e.target.value })}>
            <option value="mango">Mango</option>
            <option value="lichu">Lichu</option>
            <option value="jackfruit">JackFruit</option>
          </select>
          <h3>{this.state.fruits}</h3>
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
