import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_QUARTERLY, ADD_QUARTERLY_SUCCESS, ADD_QUARTERLY_FAILURE,
  EDIT_QUARTERLY, EDIT_QUARTERLY_SUCCESS, EDIT_QUARTERLY_FAILURE,
  DELETE_QUARTERLY, DELETE_QUARTERLY_SUCCESS, DELETE_QUARTERLY_FAILURE
} from './constants';

export function* addQuarterly(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/quarterly_todos`;
  const data = {
    category: action.category,
    content: action.content
  };

  try {
    const priority = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_QUARTERLY_SUCCESS,
      id: get(priority, 'data.id', null),
      content: get(priority, 'data.content', null),
      category: get(priority, 'data.category', null)
    });
  } catch(e) {
    yield put({type: ADD_QUARTERLY_FAILURE, error: e.message});
  }
}

export function* addQuarterlySaga() {
  const watcher = yield takeLatest(ADD_QUARTERLY, addQuarterly);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* editQuarterly(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/quarterly_todos/${action.id}`;
  const data = {
    category: action.category,
    content: action.content
  };

  try {
    const priority = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_QUARTERLY_SUCCESS,
      id: action.id,
      content: get(priority, 'data.content', null),
      category: get(priority, 'data.category', null),
    });
  } catch(e) {
    yield put({type: EDIT_QUARTERLY_FAILURE, error: e.message});
  }
}

export function* editQuarterlySaga() {
  const watcher = yield takeLatest(EDIT_QUARTERLY, editQuarterly);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* deleteQuarterly(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/quarterly_todos/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_QUARTERLY_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_QUARTERLY_FAILURE, error: e.message});
  }
}

export function* deleteQuarterlySaga() {
  const watcher = yield takeLatest(DELETE_QUARTERLY, deleteQuarterly);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  addQuarterlySaga,
  editQuarterlySaga,
  deleteQuarterlySaga
];
