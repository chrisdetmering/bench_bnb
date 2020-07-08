import React from 'react'
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from '../Components/session/signup_form_container';
import LoginFormContainer from '../Components/session/login_form_container';
import { Route } from 'react-router-dom'; 
import AuthRoute from '../Util/route_util';

const App = () => {
  return (
    <div>
      <h1>Bench BnB</h1>
      <Route exact path='/' component={GreetingContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <AuthRoute path='/login' component={LoginFormContainer} />

    </div>
  )
}

export default App; 