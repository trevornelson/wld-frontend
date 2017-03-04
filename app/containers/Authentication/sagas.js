import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { post } from 'axios';
import { browserHistory } from 'react-router';
import { API } from 'containers/App/constants';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './constants';

// Individual exports for testing
export function* createAccount(action) {
	const url = `${API}/users`;

	try {
		const authentication = yield call(post, url, action.data);
		browserHistory.push('/dashboard');
		yield put({
			type: REGISTER_SUCCESS,
			token: authentication.data.auth_token
		});
	} catch(e) {
		console.log('create account failed');
		yield put({type: REGISTER_FAIL, error: e.message});
	}
}

export function* authenticateCredentials(action) {
  const url = `${API}/authenticate`;
  const data = {
  	email: action.email,
  	password: action.password
  };

  try {
  	const authentication = yield call(post, url, data);
  	browserHistory.push('/dashboard');
  	yield put({
  		type: LOGIN_SUCCESS,
  		token: authentication.data.auth_token
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

// All sagas to be loaded
export default [
  authSaga,
  createAccountSaga
];
