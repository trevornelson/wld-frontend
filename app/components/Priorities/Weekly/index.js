/**
*
* Weekly
*
*/

import React, { PropTypes } from 'react';

import ListCard from 'components/ListCard';

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
      <ListCard
        isListEditable={ false }
        canAddItems={ true }
        title={ name }
        index={ dayIndex }
        items={ priorities }
        itemPlaceholder="Add a priority..."
        onAddItem={ onAddDaily }
        onEditItem={ onEditDaily }
        onDeleteItem={ onDeleteDaily }
      />
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
