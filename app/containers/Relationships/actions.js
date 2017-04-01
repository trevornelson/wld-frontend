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
    title: categoryName
  };
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    categoryId: id
  };
}

export function editCategory(id, categoryName) {
  return {
    type: EDIT_CATEGORY,
    categoryId: id,
    title: categoryName
  };
}

export function addRelationship(categoryId, content) {
  return {
    type: ADD_RELATIONSHIP,
    categoryId: categoryId,
    content: content
  };
}

export function deleteRelationship(categoryId, relationshipId) {
  return {
    type: DELETE_RELATIONSHIP,
    categoryId: categoryId,
    id: relationshipId
  };
}

export function editRelationship(categoryId, relationshipId, content) {
  return {
    type: EDIT_RELATIONSHIP,
    categoryId: categoryId,
    id: relationshipId,
    content: content
  };
}

