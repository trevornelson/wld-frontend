/*
 *
 * Affirmations actions
 *
 */

import {
  S3_UPLOAD,
  S3_UPLOAD_FAILURE,
  ADD_VISUALIZATION,
  EDIT_VISUALIZATION,
  DELETE_VISUALIZATION,
  ADD_AFFIRMATION,
  EDIT_AFFIRMATION,
  DELETE_AFFIRMATION
} from './constants';

export function uploadToS3() {
  return {
    type: S3_UPLOAD
  };
}

export function uploadToS3Error(message) {
  return {
    type: S3_UPLOAD_FAILURE,
    message
  };
}

export function addVisualization(s3Url) {
  return {
    type: ADD_VISUALIZATION,
    url: s3Url
  };
}

export function editVisualization() {
  return {
    type: EDIT_VISUALIZATION
  };
}

export function deleteVisualization() {
  return {
    type: DELETE_VISUALIZATION
  };
}

export function addAffirmation(content) {
  return {
    type: ADD_AFFIRMATION,
    content: content
  };
}

export function editAffirmation(id, content) {
  return {
    type: EDIT_AFFIRMATION,
    id: id,
    content: content
  };
}

export function deleteAffirmation(id) {
  return {
    type: DELETE_AFFIRMATION,
    id: id
  };
}
