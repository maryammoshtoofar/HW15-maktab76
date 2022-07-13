import React from "react";

class CounterClass extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <p>by Class Component</p>
        Counter: {this.state.counter}
        <br></br>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <hr></hr>
      </div>
    );
  }
}

export default CounterClass;
