import React from "react";
import "./notiflix/notiflix.min.css";
import "./App.css";
import "./semantic/dist/semantic.min.css";

class App extends React.Component {
  state = {
    name: "User",
    age: 0,
  };

  handleChange = (e) => {
    document.getElementById("button").disabled = false;
  };
  handleClick = (e) => {
    this.setState({
      name: document.getElementById("name").value,
    });
    e.target.disabled = true;
  };
  handleAge = (e) => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  handleSubmit = (e) => {
    this.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Form</h1>
          <p>Welcome {this.state.name}! Your age is {this.state.age}</p>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <label>Enter your name:</label>
            <input
              type="text"
              id="name"
              className="ui text"
              onChange={this.handleChange}
            />
          </form>
          <br />
          <div className="inline">
            <button id="button" className="big ui positive button" onClick={this.handleClick}>Change</button>
            <button className="big ui blue button" onClick={this.handleAge}>Add Age</button></div>
        </header>
      </div>
    );
  }
}

export default App;
