/*
 *
 * Affirmations
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAffirmations from './selectors';

import Title from 'components/Dashboard/Title';

export class Affirmations extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Title>Daily Affirmations</Title>
      </div>
    );
  }
}

Affirmations.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Affirmations: makeSelectAffirmations(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Affirmations);
