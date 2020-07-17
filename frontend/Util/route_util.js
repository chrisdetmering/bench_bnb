import React from 'react'; 
import { connect } from 'react-redux'; 
import { Route, Redirect } from 'react-router-dom'; 

const Auth = ({ path, loggedIn, component: Component}) => ( 
  <Route 
    path={path}
    render={ props => 
    !loggedIn ? <Component {...props}/> :  <Redirect to='/' />}
  />
)

const Protected = ({path, loggedIn, component: Component }) => ( 
  <Route 
  path={path}
  render={ props => 
  !loggedIn ? <Redirect to='/login'/> : <Component  {...props}/>}
  />
)


const mapStateToProps = state =>({ 
  loggedIn: Boolean(state.session.id)
})

export const AuthRoute = connect( 
  mapStateToProps
)(Auth)

export const ProtectedRoute = connect(
  mapStateToProps
)(Protected)