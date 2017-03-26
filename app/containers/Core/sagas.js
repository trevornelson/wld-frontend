import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
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

export function* coreValueSaga() {
	yield takeLatest(CHANGE_CORE_VALUE, updateCoreValue);
}

// All sagas to be loaded
export default [
  coreValueSaga
];
