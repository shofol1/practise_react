import React, { Component } from "react";

class ClassCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { name: "Mango", price: 200 },
        { name: "Apple", price: 300 },
      ],
    };
  }
  handleClick = () => {
    this.setState({
      fruits: [
        { name: "Lichu", price: 200 },
        { name: "Apple", price: 300 },
      ],
    });
  };

  render(props) {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        Hello {this.props.shofol} and {this.props.shanto}
        {this.state.fruits.map((f) => {
          return (
            <>
              <h1>{f.name}</h1>
              <h1>{f.price}</h1>
            </>
          );
        })}
      </div>
    );
  }
}

export default ClassCom;
