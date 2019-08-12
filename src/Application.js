import React, { Component } from "react";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overTen: false
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count != state.count &&
      !this.state.overTen
    ) {
      console.log("updating over ten");
      this.setState({ overTen: true });
    }
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>you clicked The Button {count}times</h1>
        {this.state.overTen ? <h3>Beat high score of ten</h3> : null}
        <span>
          <button onClick={() => this.handleClick()}>Click Me</button>
        </span>
      </div>
    );
  }
}

export default Application;
