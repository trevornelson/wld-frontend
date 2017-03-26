import { takeLatest, call, put, select } from 'redux-saga/effects';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE
} from './constants';

export function* fetchDashboard() {
	const auth = yield select(makeSelectAuthentication());

  try {
  	const dashboard = yield call([api, api.get], `/users/${auth.user.id}`);
  	yield put({
  		type: FETCH_DASHBOARD_SUCCESS,
  		payload: dashboard.data
  	});
  } catch(e) {
  	yield put({type: FETCH_DASHBOARD_FAILURE, error: 'Could not load dashboard.'});
  }
}

export function* fetchDashboardSaga() {
  yield takeLatest(FETCH_DASHBOARD, fetchDashboard);
}

export default [
  fetchDashboardSaga,
];
