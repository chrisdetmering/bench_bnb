import React from 'react'; 
import ReactDOM from 'react-dom';
import configureStore from './Store/store';
import Root from './Components/root';
import { login, logout } from './Actions/session_actions';

window.login = login; 
window.logout = logout; 


document.addEventListener('DOMContentLoaded', () => { 
  let root = document.getElementById('root');  
  let store; 

  if (Boolean(window.currentUser)) { 
    
    const preloadState = { 
      entities: { 
        users: { [window.currentUser.id]: window.currentUser } 
      },
      session: {
        id: window.currentUser.id
      } 
    }
   store = configureStore(preloadState)
   delete window.currentUser
  } else { 
    store = configureStore()
  }
  
  window.getState = store.getState
  window.dispatch = store.dispatch
  ReactDOM.render(<Root store={store}/>, root)
})