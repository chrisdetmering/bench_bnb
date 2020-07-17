import React from 'react'
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from '../Components/session/signup_form_container';
import LoginFormContainer from '../Components/session/login_form_container';
import SearchContainer from '../Components/search/search_container';
import BenchFormContainer from '../Components/bench_form/bench_form_container'
import BenchShowContainer from '../Components/bench_show/bench_show_container';
import { Route, Switch } from 'react-router-dom'; 
import { 
  AuthRoute, 
  ProtectedRoute } from '../Util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />

      </header>
      <Switch> 
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/' component={SearchContainer} />
        <ProtectedRoute exact path='/bench/new' component={BenchFormContainer}/>
        <Route  path={`/bench/:benchId`} component={BenchShowContainer} />
      </Switch>
    </div>
  )
}

export default App; 