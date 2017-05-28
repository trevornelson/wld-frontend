/**
*
* List
*
*/

import React, { PropTypes } from 'react';
import { isNull } from 'lodash';
import styled from 'styled-components';

import getDateFromDow from 'utils/getDateFromDow';
import ListItem from 'components/ListCard/ListItem';
import DayToggle from 'components/Priorities/Daily/DayToggle';

const Wrapper = styled.div`
  width: 300px;
`;

class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleAddDaily = this.handleAddDaily.bind(this);
  }

  formatDate(date) {
    const options = {
      weekday: 'long',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    };

    return date.toLocaleString('en-us', options);
  }

  handleAddDaily(dayOfWeek, content) {
    const dueDate = getDateFromDow(dayOfWeek);

    this.props.onAddDaily(dueDate, content);
  }

  render() {
  	const {
      categoryIndex,
      dayOfWeek,
      date,
      priorities,
      habits,
      onEditDaily,
      onCompleteDaily,
      onDeleteDaily,
      onIncrDayOfWeek,
      onDecrDayOfWeek
    } = this.props;

    const priorityItems = priorities.map((priority, i) => {
      return (
        <ListItem
          key={ `${i}-${dayOfWeek}` }
          completeable={ true }
          categoryIndex={ categoryIndex }
          itemId={ priority.id }
          content={ priority.content }
          completed={ priority.completed }
          onEditItem={ onEditDaily }
          onCompleteItem={ onCompleteDaily }
          onDeleteItem={ onDeleteDaily }
        />
      );
    });

    return (
      <Wrapper>
      	<h3>{ this.formatDate(date) }</h3>
        <DayToggle
          dayOfWeek={ dayOfWeek }
          onIncr={ onIncrDayOfWeek }
          onDecr={ onDecrDayOfWeek }
        />
        { priorityItems }
        { priorityItems.length < 3 ?
          <ListItem
            isNew={ true }
            placeholderText="Add a priority..."
            categoryIndex={ categoryIndex }
            onAddItem={ this.handleAddDaily }
            onDeleteDaily={ onDeleteDaily }
          /> : null
        }
      </Wrapper>
    );
  }
}

List.propTypes = {
	date: PropTypes.object,
	priorities: PropTypes.array,
	habits: PropTypes.array
};

export default List;
