/*
 *
 * Relationships actions
 *
 */

import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_RELATIONSHIP,
  DELETE_RELATIONSHIP,
  EDIT_RELATIONSHIP,
} from './constants';

export function addCategory(categoryName) {
  return {
    type: ADD_CATEGORY,
    name: categoryName
  };
}

export function deleteCategory(index) {
  return {
    type: DELETE_CATEGORY,
    categoryIndex: index
  };
}

export function editCategory(index, categoryName) {
  return {
    type: EDIT_CATEGORY,
    categoryIndex: index,
    name: categoryName
  };
}

export function addRelationship(categoryIndex, relationshipName) {
  return {
    type: ADD_RELATIONSHIP,
    categoryIndex: categoryIndex,
    name: relationshipName
  };
}

export function deleteRelationship(categoryIndex, index) {
  return {
    type: DELETE_RELATIONSHIP,
    categoryIndex: categoryIndex,
    relationshipIndex: index
  };
}

export function editRelationship(categoryIndex, index, relationshipName) {
  return {
    type: EDIT_RELATIONSHIP,
    categoryIndex: categoryIndex,
    relationshipIndex: index,
    name: relationshipName
  };
}

