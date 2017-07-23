/**
*
* Quarterly
*
*/

import React, { PropTypes } from 'react';

import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/ListCard/ListCardWrapper';

class Quarterly extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      category,
      priorities,
      onAddQuarterly,
      onEditQuarterly,
      onDeleteQuarterly
    } = this.props;

    return (
      <ListCardWrapper key={ category }>
        <ListCard
          isListEditable={ false }
          canAddItems={ category !== 'Done' }
          title={ category }
          index={ category }
          items={ priorities }
          itemPlaceholder="Add a priority..."
          onAddItem={ onAddQuarterly }
          onEditItem={ onEditQuarterly }
          onDeleteItem={ onDeleteQuarterly }
        />
      </ListCardWrapper>
    );
  }
}

Quarterly.propTypes = {
  priorities: PropTypes.array,
  category: PropTypes.string,
  onAddQuarterly: PropTypes.func,
  onEditQuarterly: PropTypes.func,
  onDeleteQuarterly: PropTypes.func
};

export default Quarterly;
