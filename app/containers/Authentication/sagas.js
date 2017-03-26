import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { browserHistory } from 'react-router';
import api from 'services/wld-api';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
  VALIDATE_TOKEN_REQUEST
} from './constants';

export function* createAccount(action) {
	try {
		const authentication = yield call([api, api.post], '/users', action.data);
		const token = get(authentication, 'data.auth_token', null);
    api.setToken(token);
		browserHistory.push('/dashboard');
		yield put({
			type: REGISTER_SUCCESS,
			token: token,
			user: get(authentication, 'data.user', null)
		});
	} catch(e) {
		yield put({type: REGISTER_FAIL, error: e.message});
	}
}

export function* validateToken(action) {
  const data = {
    token: action.token
  }

  try {
    const res = yield call([api, api.post], '/validate_token', data);
    const user = get(res, 'data.user', null);
    browserHistory.push('/dashboard');
    yield put({
      type: LOGIN_SUCCESS,
      token: action.token,
      user: user
    });
  } catch(e) {
    api.destroyToken();
    yield put({type: LOGIN_FAIL, error: 'Expired token.'});
  }
}

export function* authenticateCredentials(action) {
  const data = {
  	email: action.email,
  	password: action.password
  };

  try {
  	const authentication = yield call([api, api.post], '/authenticate', data);
    const token = get(authentication, 'data.auth_token', null);
    api.setToken(token);
  	browserHistory.push('/dashboard');
  	yield put({
  		type: LOGIN_SUCCESS,
  		token: token,
  		user: get(authentication, 'data.user', null)
  	});
  } catch(e) {
  	yield put({type: LOGIN_FAIL, error: 'Incorrect username/password.'});
  }
}

function* authSaga() {
	yield takeLatest(LOGIN_REQUEST, authenticateCredentials);
}

function* createAccountSaga() {
	yield takeLatest(REGISTER_REQUEST, createAccount);
}

function* validateTokenSaga() {
  yield takeLatest(VALIDATE_TOKEN_REQUEST, validateToken);
}

// All sagas to be loaded
export default [
  authSaga,
  createAccountSaga,
  validateTokenSaga
];
