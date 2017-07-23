/*
 *
 * Habits
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';

import makeSelectHabits from './selectors';
import {
  addHabit,
  deleteHabit
} from './actions';

import Title from 'components/DashboardInner/Title';
import SimpleTextField from 'components/SimpleTextField';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import HabitsHelp from 'components/HelpView/HabitsHelp';

export class Habits extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      Habits,
      onAddHabit,
      onDeleteHabit
    } = this.props;

    const {
      active_habits
    } = Habits;

    return (
      <div>
        <FormView>
          <Title>Daily Habits</Title>
          {
            [0, 1, 2].map((i) => (
              <SimpleTextField
                key={ i }
                item={ active_habits[i] }
                placeholder="add a habit..."
                onAdd={ onAddHabit }
                onDelete={ onDeleteHabit }
              />
            ))
          }
        </FormView>
        <HelpView>
          <HabitsHelp />
        </HelpView>
      </div>
    );
  }
}

Habits.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Habits: makeSelectHabits(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddHabit: (content) => dispatch(addHabit(content)),
    onDeleteHabit: (id) => dispatch(deleteHabit(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
