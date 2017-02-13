/**
*
* List
*
*/

import React, { PropTypes } from 'react';
import { isNull } from 'lodash';
import styled from 'styled-components';

import ListItem from 'components/ListCard/ListItem';
import DayToggle from 'components/Priorities/Daily/DayToggle';

const Wrapper = styled.div`
  width: 300px;
`;

class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const {
      categoryIndex,
      dayOfWeek,
      date,
      priorities,
      habits,
      onAddDaily,
      onEditDaily,
      onCompleteDaily,
      onDeleteDaily,
      onIncrDayOfWeek,
      onDecrDayOfWeek
    } = this.props;
    const priorityItems = priorities.map((priority, i) => {
      return (
        <ListItem
          key={ i }
          categoryIndex={ categoryIndex }
          text={ priority.text }
          onEditItem={ onEditDaily }
          onCompleteItem={ onCompleteDaily }
          onDeleteItem={ onDeleteDaily }
        />
      );
    });

    return (
      <Wrapper>
      	<h3>{ date.toLocaleString('en-us', { weekday: 'long' }) }</h3>
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
            onAddItem={ onAddDaily }
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
