import React from "react";
// Destructuring ... grabs var out of an array or object, then immediately assign it to variable
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// App as variable
const App = props => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <p>Current count: {props.count}</p>
  </div>
);

// App as class
class AppAsClass extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    // This way simply updates the state
    // this.setState({ count: this.state.count + 1 });

    // 'updater' works off of previous state
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    // For onClick, arrow function finds current context to 'this'
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

render(<AppAsClass />, document.getElementById("root"));

/*
let count = 0;
setInterval(
  () => render(<AppAsClass count={count++} />, document.getElementById("root")),
  1000
);
*/

// ADD TO NOTES
// State
//   Internally-managed config for a component
//   'this.state' is a class property on the compnent instance
//   Can only be updated by invoking 'this.setState()' (from React.Component)
//     Can take object to be merged, or a function of previous state
//     Batched and run asynchronously
