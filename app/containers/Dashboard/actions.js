/*
 *
 * Dashboard actions
 *
 */

import {
  FETCH_DASHBOARD,
} from './constants';

export function fetchDashboard() {
  return {
    type: FETCH_DASHBOARD,
  };
}
