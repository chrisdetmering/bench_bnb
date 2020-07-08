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

const mapStateToProps = state =>({ 
  loggedIn: Boolean(state.session.id)
})

export default connect( 
  mapStateToProps
)(Auth)