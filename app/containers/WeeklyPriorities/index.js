/*
 *
 * WeeklyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectWeeklyPriorities } from 'containers/Priorities/selectors';
import {
  addDaily,
  editDaily,
  deleteDaily
} from 'containers/Priorities/actions';
import Weekly from 'components/Priorities/Weekly';

const Wrapper = styled.div`
  display: block;
  background: #DADFE1;
  padding: 10px;
  height: 500px;
  margin: 25px 0px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #6C7A89;
`;

export class WeeklyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderDay(day, i) {
    const { name, priorities } = day;
    const { onAddDaily, onEditDaily, onDeleteDaily} = this.props;

    return (
      <Wrapper key={ i }>
        <Weekly
          name={ name }
          dayIndex={ i }
          priorities={ priorities }
          onAddDaily={ onAddDaily }
          onEditDaily={ onEditDaily }
          onDeleteDaily={ onDeleteDaily }
        />
      </Wrapper>
    );
  }

  render() {
    const { weeklyPriorities } = this.props;
    console.log(weeklyPriorities);

    return (
      <div>
        { weeklyPriorities.map((day, i) => this.renderDay(day, i)) }
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
    onAddDaily: (date, content) => dispatch(addDaily(date, content)),
    onEditDaily: (id, content) => dispatch(editDaily(id, content)),
    onDeleteDaily: (id) => dispatch(deleteDaily(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyPriorities);
