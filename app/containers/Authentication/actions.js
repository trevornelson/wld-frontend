/*
 *
 * Authentication actions
 *
 */

import {
  TOGGLE_VIEW,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  VALIDATE_TOKEN_REQUEST
} from './constants';

export function toggleView(view) {
  return {
    type: TOGGLE_VIEW,
    view: view
  };
}

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email: email,
    password: password
  };
}

export function registerRequest(data) {
  return {
    type: REGISTER_REQUEST,
    data: data
  };
}

export function validateToken(token) {
  return {
    type: VALIDATE_TOKEN_REQUEST,
    token: token
  };
}

