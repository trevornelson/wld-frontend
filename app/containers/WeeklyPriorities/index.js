/*
 *
 * WeeklyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectWeeklyPriorities } from 'containers/Priorities/selectors';

export class WeeklyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { weeklyPriorities } = this.props;

    return (
      <div>
      </div>
    );
  }
}

WeeklyPriorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weeklyPriorities: makeSelectWeeklyPriorities(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyPriorities);
