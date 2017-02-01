/*
 *
 * ShortTermGoals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectShortTermGoals from './selectors';

import Title from 'components/Dashboard/Title';

export class ShortTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Title>Short Term Goals</Title>
      </div>
    );
  }
}

ShortTermGoals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ShortTermGoals: makeSelectShortTermGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortTermGoals);
