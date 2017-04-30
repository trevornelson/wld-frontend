import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_GOAL, ADD_GOAL_SUCCESS, ADD_GOAL_FAILURE,
  EDIT_GOAL, EDIT_GOAL_SUCCESS, EDIT_GOAL_FAILURE,
  DELETE_GOAL, DELETE_GOAL_SUCCESS, DELETE_GOAL_FAILURE
} from './constants';

export function* addGoal(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/short_term_goals`;
  const data = {
    category: action.category,
    content: action.content
  };

  try {
    const goal = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_GOAL_SUCCESS,
      id: get(goal, 'data.id', null),
      content: get(goal, 'data.content', null),
      category: get(goal, 'data.category', null)
    });
  } catch(e) {
    yield put({type: ADD_GOAL_FAILURE, error: e.message});
  }
}

export function* addGoalSaga() {
  const watcher = yield takeLatest(ADD_GOAL, addGoal);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* editGoal(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/short_term_goals/${action.id}`;
  const data = {
    content: action.content
  };

  try {
    const goal = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_GOAL_SUCCESS,
      id: action.id,
      content: get(goal, 'data.content', null),
    });
  } catch(e) {
    yield put({type: EDIT_GOAL_FAILURE, error: e.message});
  }
}

export function* editGoalSaga() {
  const watcher = yield takeLatest(EDIT_GOAL, editGoal);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* deleteGoal(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/short_term_goals/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_GOAL_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_GOAL_FAILURE, error: e.message});
  }
}

export function* deleteGoalSaga() {
  const watcher = yield takeLatest(DELETE_GOAL, deleteGoal);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  addGoalSaga,
  editGoalSaga,
  deleteGoalSaga
];
