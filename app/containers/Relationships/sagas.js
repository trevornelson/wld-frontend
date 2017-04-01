import { take, call, put, select, takeLatest } from 'redux-saga/effects';
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
			name: category.name,
      categoryId: category.id
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
  const urlPath = `/users/${auth.user.id}/relationship_categories/${action.id}`;
}

export function* deleteCategorySaga() {
  yield take(DELETE_CATEGORY, deleteCategory);
}

export function* editCategory(action) {

}

// All sagas to be loaded
export default [
  addCategorySaga,
];
