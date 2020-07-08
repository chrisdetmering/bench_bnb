import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: '', 
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this); 
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state)
    this.props.processForm(user).then( 
      res => console.log('[session_form]',res)
    )
  }

  update(field) {
    return (e) => { 
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
  let formType = this.props.formType; 
  let path = formType === 'signup' ? 'login' : 'signup';
  let errors = this.props.errors.map(error => (
    <li>{error}</li>
  ))

    return (
     <div>
       <div>
          <h1>{formType[0].toUpperCase() + formType.slice(1)}</h1>
          <ul>{errors}</ul>
          <Link to={path}>{path}</Link>
          <form onSubmit={this.handleSubmit}>

            <label>
              Username
              <input 
                type="text"
                onChange={this.update('username')}
                value={this.state.username}/>
            </label>

            <label>
              Password
              <input 
                type="password"
                onChange={this.update('password')}
                value={this.state.password} />
            </label>

            <input type="submit" value={formType}/>
          </form>
        </div>
      </div> 
    )
  }
}
