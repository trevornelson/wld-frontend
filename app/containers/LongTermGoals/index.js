/*
 *
 * LongTermGoals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLongTermGoals from './selectors';

import Title from 'components/Dashboard/Title';

export class LongTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Title>Long Term Goals</Title>
      </div>
    );
  }
}

LongTermGoals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LongTermGoals: makeSelectLongTermGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermGoals);
