import React, { Component, Fragment } from "react";
import Counter from "./component/Counter";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
    };
    console.log("This is App CONSTRUCTOR METHOD");
  }

  // User Defined Method
  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps={0} />
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }

  // User Defined Method
  unmount() {
    alert("component UnMounted..!");
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"));
  }

  render() {
    console.log("This is App RENDER METHOD");
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">LIFECYCLE</h1>
            </div>
          </div>

          <hr />

          <div className="row my-3">
            <div className="col">
              <p>
                <b>DEFAULT STATE RESULT : </b>
                {this.state.name}
              </p>
              <button
                className="btn btn-outline-success"
                onClick={this.mount.bind(this)}
              >
                Mount
              </button>
              <button
                className="btn btn-outline-danger float-end"
                onClick={this.unmount.bind(this)}
              >
                UnMount
              </button>
            </div>
          </div>
        </div>
        {/* <Counter /> */}
        <section id="renderHere"></section>
      </Fragment>
    );
  }
}
