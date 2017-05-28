import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_QUARTERLY, ADD_QUARTERLY_SUCCESS, ADD_QUARTERLY_FAILURE,
  EDIT_QUARTERLY, EDIT_QUARTERLY_SUCCESS, EDIT_QUARTERLY_FAILURE,
  DELETE_QUARTERLY, DELETE_QUARTERLY_SUCCESS, DELETE_QUARTERLY_FAILURE,
  ADD_DAILY, ADD_DAILY_SUCCESS, ADD_DAILY_FAILURE,
  EDIT_DAILY, EDIT_DAILY_SUCCESS, EDIT_DAILY_FAILURE,
  COMPLETE_DAILY, COMPLETE_DAILY_SUCCESS, COMPLETE_DAILY_FAILURE,
  DELETE_DAILY, DELETE_DAILY_SUCCESS, DELETE_DAILY_FAILURE
} from './constants';

/**
 * Add Quarterly
 */
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

/**
 * Edit Quarterly
 */
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

/**
 * Delete Quarterly
 */
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

/**
 * Add Daily
 */
export function* addDaily(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/daily_todos`;
  const data = {
    due_date: action.due_date,
    content: action.content
  };

  try {
    const priority = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_DAILY_SUCCESS,
      id: get(priority, 'data.id', null),
      content: get(priority, 'data.content', null),
      due_date: get(priority, 'data.due_date', null),
      completed: get(priority, 'data.completed', false)
    });
  } catch(e) {
    yield put({type: ADD_DAILY_FAILURE, error: e.message});
  }
}

export function* addDailySaga() {
  const watcher = yield takeLatest(ADD_DAILY, addDaily);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Edit Daily
 */
export function* editDaily(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/daily_todos/${action.id}`;
  const data = {
    content: action.content
  };

  try {
    const priority = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_DAILY_SUCCESS,
      id: action.id,
      content: get(priority, 'data.content', null),
      completed: get(priority, 'data.completed', false)
    });
  } catch(e) {
    yield put({type: EDIT_DAILY_FAILURE, error: e.message});
  }
}

export function* editDailySaga() {
  const watcher = yield takeLatest(EDIT_DAILY, editDaily);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Complete Daily
 */
export function* completeDaily(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/daily_todos/${action.id}`;
  const data = {
    completed: action.completed
  };

  try {
    const priority = yield call([api, api.put], urlPath, data);
    yield put({
      type: COMPLETE_DAILY_SUCCESS,
      id: action.id,
      content: get(priority, 'data.content', null),
      completed: get(priority, 'data.completed', false)
    });
  } catch(e) {
    yield put({type: COMPLETE_DAILY_FAILURE, error: e.message});
  }
}

export function* completeDailySaga() {
  const watcher = yield takeLatest(COMPLETE_DAILY, completeDaily);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Delete Daily
 */
export function* deleteDaily(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/daily_todos/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_DAILY_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_DAILY_FAILURE, error: e.message});
  }
}

export function* deleteDailySaga() {
  const watcher = yield takeLatest(DELETE_DAILY, deleteDaily);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  addQuarterlySaga,
  editQuarterlySaga,
  deleteQuarterlySaga,
  addDailySaga,
  editDailySaga,
  deleteDailySaga,
  completeDailySaga
];
