/*
 *
 * WeeklyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class WeeklyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>Weekly Priorities</h3>
      </div>
    );
  }
}

WeeklyPriorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(WeeklyPriorities);
