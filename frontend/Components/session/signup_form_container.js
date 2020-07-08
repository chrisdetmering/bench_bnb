import { connect } from 'react-redux'; 
import { signup } from '../../Actions/session_actions'; 
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session, 
  formType: 'signup',  
  loggedIn: Boolean(state.session.id)

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(SessionForm); 