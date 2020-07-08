import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Greeting extends Component {
  render() {
    let greeting; 
    if (this.props.currentUser) { 
      greeting = <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    } else { 
      greeting = <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Login</Link>
      </div>
    }

    return (
      <div>
        <h1>Greeting Presentational Component</h1>
        {greeting}
      </div>
    )
  }
}
