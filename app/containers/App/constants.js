/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const API = 'http://wld-backend.herokuapp.com';

export const CORE_VALUE_INDEXES = ['first', 'second', 'third'];

// Focused component constants
export const CORE_VALUES_FOCUSED = 'core-values';
export const CORE_PURPOSE_FOCUSED = 'core-purpose';
export const KEY_RELATIONSHIPS_FOCUSED = 'key-relationships';
export const LONG_TERM_FOCUSED = 'long-term-goals';
export const SHORT_TERM_FOCUSED = 'short-term-goals';
export const DAILY_PRIORITIES_FOCUSED = 'daily-priorities';
export const WEEKLY_PRIORITIES_FOCUSED = 'weekly-priorities';
export const QUARTERLY_PRIORITIES_FOCUSED = 'quarterly-priorities';
export const AFFIRMATIONS_FOCUSED = 'affirmations';
