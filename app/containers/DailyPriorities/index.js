/*
 *
 * DailyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class DailyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>Daily Grind</h3>
      </div>
    );
  }
}

DailyPriorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DailyPriorities);
