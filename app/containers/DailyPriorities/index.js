/*
 *
 * DailyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectDailyPriorities,
  makeSelectFocusedDate,
  selectDayOfWeek
} from 'containers/Priorities/selectors';
import {
  incrDayOfWeek,
  decrDayOfWeek,
  addDaily,
  editDaily,
  completeDaily,
  deleteDaily,
  completeHabit,
  uncompleteHabit
} from 'containers/Priorities/actions';

import List from 'components/Priorities/Daily/List';

export class DailyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      day: {
        priorities,
        habits
      },
      date,
      dayOfWeek,
      onIncrDayOfWeek,
      onDecrDayOfWeek,
      onAddDaily,
      onEditDaily,
      onCompleteDaily,
      onDeleteDaily,
      onCompleteHabit,
      onUncompleteHabit
    } = this.props;

    return (
      <div>
        <List
          date={ date }
          categoryIndex={ dayOfWeek }
          dayOfWeek={ dayOfWeek }
          priorities={ priorities }
          habits={ habits }
          onAddDaily={ onAddDaily }
          onEditDaily={ onEditDaily }
          onCompleteDaily={ onCompleteDaily }
          onCompleteHabit={ onCompleteHabit }
          onUncompleteHabit={ onUncompleteHabit }
          onDeleteDaily={ onDeleteDaily }
          onIncrDayOfWeek={ onIncrDayOfWeek }
          onDecrDayOfWeek={ onDecrDayOfWeek }
        />
      </div>
    );
  }
}

DailyPriorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  day: makeSelectDailyPriorities(),
  date: makeSelectFocusedDate()
});

function mapDispatchToProps(dispatch) {
  return {
    onIncrDayOfWeek: () => dispatch(incrDayOfWeek()),
    onDecrDayOfWeek: () => dispatch(decrDayOfWeek()),
    onAddDaily: (dueDate, content) => dispatch(addDaily(dueDate, content)),
    onEditDaily: (_dayOfWeek, id, content) => dispatch(editDaily(id, content)),
    onCompleteDaily: (id, completed) => dispatch(completeDaily(id, completed)),
    onDeleteDaily: (_dayOfWeek, id) => dispatch(deleteDaily(id)),
    onCompleteHabit: (id, completed, dueDate) => dispatch(completeHabit(id, completed, dueDate)),
    onUncompleteHabit: (id) => dispatch(uncompleteHabit(id)),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyPriorities);
