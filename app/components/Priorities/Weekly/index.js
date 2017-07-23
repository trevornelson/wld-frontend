/**
*
* Weekly
*
*/

import React, { PropTypes } from 'react';

import CategoryWrapper from 'components/LongGoals/CategoryWrapper';
import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/LongGoals/ListCardWrapper';
import InputLabel from 'components/InputLabel';

class Weekly extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      name,
      dayIndex,
      priorities,
      onAddDaily,
      onEditDaily,
      onDeleteDaily
    } = this.props;

    return (
      <CategoryWrapper>
        <InputLabel>{ name }</InputLabel>
        <ListCard
          isListEditable={ false }
          canAddItems={ true }
          index={ dayIndex }
          items={ priorities }
          itemPlaceholder="Add a priority..."
          onAddItem={ onAddDaily }
          onEditItem={ onEditDaily }
          onDeleteItem={ onDeleteDaily }
        />
      </CategoryWrapper>
    );
  }
}

Weekly.propTypes = {
  name: PropTypes.string,
  dayIndex: PropTypes.number,
  priorities: PropTypes.array,
  onAddDaily: PropTypes.func,
  onEditDaily: PropTypes.func,
  onDeleteDaily: PropTypes.func
};

export default Weekly;
