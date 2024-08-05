import React, { Component } from 'react'
import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';

export default class Counter extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false
    };
    console.log("This is a Counter constructor method");
  }

  componentWillMount(){
    console.log("Counter child component, component will mount(deprecated)...");
  }

  componentDidMount() {
    console.log('component did mount called')
  }

  // User Defined Method
  updateCounter(){
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps={this.props.counterProps+1}/>
      </React.StrictMode>, document.getElementById("renderHere")
    )
  }

  // deprecated
  componentWillReceiveProps(newProps, newContext){
    console.log("Component Will Receive Props");
    console.log("New Props = ", newProps);
    console.log("newContext (New State) = ", newContext);
    if(newProps.counterProps > 5){
      this.setState({isActive: true});
    }
  }

  // Decision Maker
  shouldComponentUpdate(newProps, newState){
    console.log("Should component update..?");
    console.log("New Props: ",  newProps);
    console.log('New state: ',  newState);
    return true;
  }

  // Deprecated
  componentWillUpdate(newProps, newState){
    console.log("Component Will Update");
    console.log("New Props: ",  newProps);
    console.log('New state: ',  newState);
  }

  render() {
    console.log("This is a Counter render method");
    return (
      <Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-primary text-center">Counter Child Component</h1>
                    <hr />
                </div>
            </div>

            <div className="row">
              <div className="col">
                <h1>{this.props.counterProps}</h1>
                <div className="lead border p-3 text-center">
                  {/* {this.state.isActive && <p>State value type is TRUE</p>} */}
                  {
                  this.state.isActive ? 
                  <h1 className='text-success'>WELCOME TO LIFECYCLE METHODS</h1> 
                : (
                  <div>
                    <h1 className='text-secondary'>Need More Counts</h1>
                    <button ype='button' className='btn btn-outline-warning' onClick={this.updateCounter.bind(this)} >Add +1 (Update Props value)</button>
                  </div>
                )}
                </div>
              </div>
            </div>

        </div>
      </Fragment>
    )
  }

  componentDidUpdate(oldProps, oldState){
    console.log("Component Did Update");
    console.log("Old Props: ",  oldProps);
    console.log('Old state: ',  oldState);
  }

  componentWillUnmount() {
    console.log('component successfully unmounted')
  }
}
