/*
 *
 * Priorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectPriorities from './selectors';

import { selectView } from './actions';

import QuarterlyPriorities from 'containers/QuarterlyPriorities';
import WeeklyPriorities from 'containers/WeeklyPriorities';
import DailyPriorities from 'containers/DailyPriorities';
import Title from 'components/Dashboard/Title';
import Toggle from 'components/Priorities/Toggle';

export class Priorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderView() {
    const { view } = this.props.Priorities;

    switch(view) {
      case 'quarter': return <QuarterlyPriorities />;
      case 'week': return <WeeklyPriorities />;
      case 'day': return <DailyPriorities />;
    }
  }

  render() {
    const { onSelectView } = this.props;

    return (
      <div>
        <Title>Priorities</Title>
        <Toggle onSelectView={ onSelectView } />
        { this.renderView() }
      </div>
    );
  }
}

Priorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Priorities: makeSelectPriorities(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectView: (view) => dispatch(selectView(view)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Priorities);
