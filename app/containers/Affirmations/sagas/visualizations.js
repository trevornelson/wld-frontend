import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';

import {
  ADD_VISUALIZATION, ADD_VISUALIZATION_SUCCESS, ADD_VISUALIZATION_FAILURE,
  EDIT_VISUALIZATION, EDIT_VISUALIZATION_SUCCESS, EDIT_VISUALIZATION_FAILURE,
  DELETE_VISUALIZATION, DELETE_VISUALIZATION_SUCCESS, DELETE_VISUALIZATION_FAILURE
} from '../constants';

export function* addVisualization(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/visualizations`;
  const data = {
    url: action.url
  };

  try {
    const visualization = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_VISUALIZATION_SUCCESS,
      id: get(visualization, 'data.id', null),
      url: get(visualization, 'data.url', null)
    });
  } catch(e) {
    yield put({type: ADD_VISUALIZATION_FAILURE, error: e.message});
  }
}

export function* addVisualizationSaga() {
  const watcher = yield takeLatest(ADD_VISUALIZATION, addVisualization);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* editVisualization(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/visualizations/${action.id}`;
  const data = {
    caption: action.caption
  };

  try {
    const visualization = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_VISUALIZATION_SUCCESS,
      id: action.id,
      caption: get(visualization, 'data.caption', null)
    });
  } catch(e) {
    yield put({type: EDIT_VISUALIZATION_FAILURE, error: e.message});
  }
}

export function* editVisualizationSaga() {
  const watcher = yield takeLatest(EDIT_VISUALIZATION, editVisualization);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* deleteVisualization(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/visualizations/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_VISUALIZATION_SUCCESS,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_VISUALIZATION_FAILURE, error: e.message});
  }
}

export function* deleteVisualizationSaga() {
  const watcher = yield takeLatest(DELETE_VISUALIZATION, deleteVisualization);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
