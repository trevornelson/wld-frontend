import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import api from 'services/wld-api';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  ADD_CATEGORY, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE,
  DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE,
  EDIT_CATEGORY, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE,
  ADD_RELATIONSHIP, ADD_RELATIONSHIP_SUCCESS, ADD_RELATIONSHIP_FAILURE,
  DELETE_RELATIONSHIP, DELETE_RELATIONSHIP_SUCCESS, DELETE_RELATIONSHIP_FAILURE,
  EDIT_RELATIONSHIP, EDIT_RELATIONSHIP_SUCCESS, EDIT_RELATIONSHIP_FAILURE
} from './constants';

export function* addCategory(action) {
	const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories`;
  const data = {
  	title: action.title
  };

	try {
		const category = yield call([api, api.post], urlPath, data);
		yield put({
			type: ADD_CATEGORY_SUCCESS,
			title: get(category, 'data.title', null),
      categoryId: get(category, 'data.id', null)
		});
	} catch(e) {
		yield put({type: ADD_CATEGORY_FAILURE, error: e.message});
	}
}

export function* addCategorySaga() {
  yield takeLatest(ADD_CATEGORY, addCategory);
}

export function* deleteCategory(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.categoryId}`;
  
  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_CATEGORY_SUCCESS,
      categoryId: action.categoryId
    });
  } catch(e) {
    yield put({type: DELETE_CATEGORY_FAILURE, error: e.message});
  }
}

export function* deleteCategorySaga() {
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}

export function* editCategory(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.categoryId}`;
  const data = {
    title: action.title
  };

  try {
    const category = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_CATEGORY_SUCCESS,
      categoryId: get(category, 'data.id', null),
      title: get(category, 'data.title', null)
    });
  } catch(e) {
    yield put({type: EDIT_CATEGORY_FAILURE, error: e.message});
  }
}

export function* editCategorySaga() {
  yield takeLatest(EDIT_CATEGORY, editCategory);
}

export function* addRelationship(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.categoryId}/relationships`;
  const data = {
    content: action.content
  }

  try {
    const relationship = yield call([api, api.post], urlPath, data);
    yield put({
      type: ADD_RELATIONSHIP_SUCCESS,
      categoryId: action.categoryId,
      relationshipId: get(relationship, 'data.id'),
      content: get(relationship, 'data.content')
    });
  } catch(e) {
    yield put({type: ADD_RELATIONSHIP_FAILURE, error: e.message});
  }
};

export function* addRelationshipSaga() {
  yield takeLatest(ADD_RELATIONSHIP, addRelationship);
}

export function* deleteRelationship(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.categoryId}/relationships/${action.id}`;

  try {
    const response = yield call([api, api.delete], urlPath);
    yield put({
      type: DELETE_RELATIONSHIP_SUCCESS,
      categoryId: action.categoryId,
      id: action.id
    });
  } catch(e) {
    yield put({type: DELETE_RELATIONSHIP_FAILURE, error: e.message});
  }
}

export function* deleteRelationshipSaga() {
  yield takeLatest(DELETE_RELATIONSHIP, deleteRelationship);
}

export function* editRelationship(action) {
  const auth = yield select(makeSelectAuthentication());
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.categoryId}/relationships/${action.id}`;
  const data = {
    content: action.content
  }

  try {
    const relationship = yield call([api, api.put], urlPath, data);
    yield put({
      type: EDIT_RELATIONSHIP_SUCCESS,
      categoryId: action.categoryId,
      id: get(relationship, 'data.id'),
      content: get(relationship, 'data.content')
    });
  } catch(e) {
    yield put({type: EDIT_RELATIONSHIP_FAILURE, error: e.message});
  }
}

export function* editRelationshipSaga() {
  yield takeLatest(EDIT_RELATIONSHIP, editRelationship);
}

// All sagas to be loaded
export default [
  addCategorySaga,
  deleteCategorySaga,
  editCategorySaga,
  addRelationshipSaga,
  deleteRelationshipSaga,
  editRelationshipSaga
];
