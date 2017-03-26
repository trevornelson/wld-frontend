/*
 *
 * Authentication reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_VIEW,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './constants';

const initialState = fromJS({
	authenticated: false,
	sendingRequest: false,
	view: 'login',
  token: localStorage.getItem('token'),
  user: null,
	error: null
});

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_VIEW:
      return state
      	.set('view', action.view);
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    	return state
    		.set('sendingRequest', true);
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    	return state
    		.merge({
    			sendingRequest: false,
    			authenticated: true,
    			token: action.token,
          user: action.user,
    			error: null
    		});
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    	return state
    		.merge({
    			sendingRequest: false,
    			error: action.error
    		});
    default:
      return state;
  }
}

export default authenticationReducer;
