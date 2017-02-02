/*
 *
 * Core actions
 *
 */

import {
  CHANGE_CORE_PURPOSE,
  CHANGE_CORE_VALUE,
  TOGGLE_CORE_HELP_VIEW
} from './constants';

export function changeCorePurpose(corePurpose) {
  return {
    type: CHANGE_CORE_PURPOSE,
    corePurpose: corePurpose
  };
}

export function changeCoreValue(valueIndex, valueText) {
	return {
		type: CHANGE_CORE_VALUE,
		valueIndex: valueIndex,
		valueText: valueText
	};
}

export function toggleCoreHelpView(view) {
  return {
    type: TOGGLE_CORE_HELP_VIEW,
    activeHelpView: view
  };
}
