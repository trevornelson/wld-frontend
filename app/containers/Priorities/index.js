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
import Title from 'components/DashboardInner/Title';
import Toggle from 'components/Priorities/Toggle';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import DailyHelp from 'components/HelpView/DailyHelp';
import WeeklyHelp from 'components/HelpView/WeeklyHelp';
import QuarterlyHelp from 'components/HelpView/QuarterlyHelp';

export class Priorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderHelpView() {
    const { view } = this.props.Priorities;

    switch(view) {
      case 'quarter': return <QuarterlyHelp />;
      case 'week': return <WeeklyHelp />;
      case 'day': return <DailyHelp />;
    }
  }

  renderFormView() {
    const { view, dayOfWeek } = this.props.Priorities;

    switch(view) {
      case 'quarter': return <QuarterlyPriorities />;
      case 'week': return <WeeklyPriorities />;
      case 'day': return <DailyPriorities dayOfWeek={ dayOfWeek } />;
    }
  }

  render() {
    const { onSelectView } = this.props;
    const { view } = this.props.Priorities;

    return (
      <div>
        <FormView>
          <Title>Priorities</Title>
          <Toggle view={ view } onSelectView={ onSelectView } />
          { this.renderFormView() }
        </FormView>
        <HelpView>
          { this.renderHelpView() }
        </HelpView>
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
