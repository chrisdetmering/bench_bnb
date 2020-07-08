import { connect } from 'react-redux';
import { login } from '../../Actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login',
  loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm); 