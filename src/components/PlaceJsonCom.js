import axios from "axios";
import React, { Component } from "react";

export default class PlaceJsonCom extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // handle success
      console.log(res);
      this.setState({
        posts: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post, idx) => {
          return (
            <div key={idx}>
              <h3>name: {post.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
