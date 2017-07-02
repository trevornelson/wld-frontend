import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_AFFIRMATION, ADD_AFFIRMATION_SUCCESS, ADD_AFFIRMATION_FAILURE,
  EDIT_AFFIRMATION, EDIT_AFFIRMATION_SUCCESS, EDIT_AFFIRMATION_FAILURE,
  DELETE_AFFIRMATION, DELETE_AFFIRMATION_SUCCESS, DELETE_AFFIRMATION_FAILURE
} from './constants';

export function* addAffirmation(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/affirmations`;
  const data = {
    content: action.content
  };

  try {
    const affirmation = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_AFFIRMATION_SUCCESS,
      id: get(affirmation, 'data.id', null),
      content: get(affirmation, 'data.content', null)
    });
  } catch(e) {
    yield put({type: ADD_AFFIRMATION_FAILURE, error: e.message});
  }
}

export function* addAffirmationSaga() {
  const watcher = yield takeLatest(ADD_AFFIRMATION, addAffirmation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* editAffirmation(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/affirmations/${action.id}`;
  const data = {
    content: action.content
  };

  try {
    const affirmation = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_AFFIRMATION_SUCCESS,
      id: action.id,
      content: get(affirmation, 'data.content', null)
    });
  } catch(e) {
    yield put({type: EDIT_AFFIRMATION_FAILURE, error: e.message});
  }
}

export function* editAffirmationSaga() {
  const watcher = yield takeLatest(EDIT_AFFIRMATION, editAffirmation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* deleteAffirmation(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/affirmations/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_AFFIRMATION_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_AFFIRMATION_FAILURE, error: e.message});
  }
}

export function* deleteAffirmationSaga() {
  const watcher = yield takeLatest(DELETE_AFFIRMATION, deleteAffirmation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  addAffirmationSaga,
  editAffirmationSaga,
  deleteAffirmationSaga
];
