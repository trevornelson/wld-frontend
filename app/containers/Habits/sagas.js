import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';

import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_HABIT, ADD_HABIT_SUCCESS, ADD_HABIT_FAILURE,
  DELETE_HABIT, DELETE_HABIT_SUCCESS, DELETE_HABIT_FAILURE
} from './constants';

/**
 * Add Habit
 */
export function* addHabit(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/habits`;
  const data = {
    content: action.content,
    active: true
  };

  try {
    const habit = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_HABIT_SUCCESS,
      id: get(habit, 'data.id', null),
      content: get(habit, 'data.content', null)
    });
  } catch(e) {
    yield put({type: ADD_HABIT_FAILURE, error: e.message});
  }
}

export function* addHabitSaga() {
  const watcher = yield takeLatest(ADD_HABIT, addHabit);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Delete Habit
 */
export function* deleteHabit(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/habits/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_HABIT_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_HABIT_FAILURE, error: e.message});
  }
}

export function* deleteHabitSaga() {
  const watcher = yield takeLatest(DELETE_HABIT, deleteHabit);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  addHabitSaga,
  deleteHabitSaga
];
