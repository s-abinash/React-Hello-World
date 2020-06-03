import React from "react";
import "./notiflix/notiflix.min.css";
import "./App.css";
import "./semantic/dist/semantic.min.css";

class App extends React.Component {
  state = {
    name: "Abi",
    age: 19,
  };
  handleClick = (e) => {
    console.log(this.age);
    this.setState({
      age: 20,
    });
  };
  handleCopy = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sample Test</h1>
          <p onCopy={this.handleCopy}>
            My name is {this.state.name} and My age is {this.state.age}
          </p>
          <button className="big ui positive button" onClick={this.handleClick}>
            Change
          </button>
        </header>
      </div>
    );
  }
}

export default App;
