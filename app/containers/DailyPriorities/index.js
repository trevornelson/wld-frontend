/*
 *
 * DailyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectDailyPriorities, selectDayOfWeek } from 'containers/Priorities/selectors';
import { incrDayOfWeek, decrDayOfWeek, addDaily, editDaily, completeDaily, deleteDaily } from 'containers/Priorities/actions';

import List from 'components/Priorities/Daily/List';

export class DailyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      day,
      dayOfWeek,
      onIncrDayOfWeek,
      onDecrDayOfWeek,
      onAddDaily,
      onEditDaily,
      onCompleteDaily,
      onDeleteDaily
    } = this.props;
    const { date, priorities, habits } = day;

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
  day: makeSelectDailyPriorities()
});

function mapDispatchToProps(dispatch) {
  return {
    onIncrDayOfWeek: () => dispatch(incrDayOfWeek()),
    onDecrDayOfWeek: () => dispatch(decrDayOfWeek()),
    onAddDaily: (dailyIndex, priority) => dispatch(addDaily(dailyIndex, priority)),
    onEditDaily: (dailyIndex, index, priority) => dispatch(editDaily(dailyIndex, index, priority)),
    onCompleteDaily: (dailyIndex, index) => dispatch(completeDaily(dailyIndex, index)),
    onDeleteDaily: (dailyIndex, index) => dispatch(deleteDaily(dailyIndex, index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyPriorities);
