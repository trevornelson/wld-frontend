import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  CHANGE_CORE_PURPOSE,
  CORE_PURPOSE_SUCCESS,
  CORE_PURPOSE_FAIL,
	CHANGE_CORE_VALUE,
	CORE_VALUE_SUCCESS,
	CORE_VALUE_FAIL
} from './constants';

export function* updateCoreValue(action) {
	const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/values/${action.valueId}`;
  const data = {
  	content: action.valueText
  };

	try {
		const coreValue = yield call([api, api.put], urlPath, data);
		yield put({
			type: CORE_VALUE_SUCCESS,
			valueId: action.valueId,
			valueText: coreValue.content
		});
	} catch(e) {
		yield put({type: CORE_VALUE_FAIL, error: e.message});
	}
}

export function* updateCorePurpose(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}`;
  const data = {
    purpose: action.corePurpose
  }

  try {
    const user = yield call([api, api.put], urlPath, data);
    yield put({
      type: CORE_PURPOSE_SUCCESS,
      corePurpose: user.purpose
    });
  } catch(e) {
    yield put({type: CORE_PURPOSE_FAIL, error: e.message});
  }
}

export function* coreValueSaga() {
	const watcher = yield takeLatest(CHANGE_CORE_VALUE, updateCoreValue);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* corePurposeSaga() {
  const watcher = yield takeLatest(CHANGE_CORE_PURPOSE, updateCorePurpose);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  coreValueSaga,
  corePurposeSaga
];
