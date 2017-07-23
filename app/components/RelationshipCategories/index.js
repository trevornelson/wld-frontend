/**
*
* RelationshipCategories
*
*/

import React, { PropTypes } from 'react';
import { chunk } from 'lodash';

import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/ListCard/ListCardWrapper';
import ListCardRow from 'components/ListCard/ListCardRow';

class RelationshipCategories extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  rowOfCategories = (row, rowIndex) => {
    return (
      <ListCardRow key={ rowIndex }>
        { row.map(this.categoryCard) }
      </ListCardRow>
    );
  }

  categoryCard = (category, index) => {
    const {
      onEditCategory,
      onDeleteCategory,
      onAddRelationship,
      onEditRelationship,
      onDeleteRelationship
    } = this.props;

    return (
      <ListCardWrapper key={ category.title + index }>
        <ListCard
          isListEditable={ true }
          canAddItems={ true }
          title={ category.title }
          index={ category.id }
          items={ category.relationships }
          itemPlaceholder="Add a relationship..."
          onEditList={ onEditCategory }
          onDeleteList={ onDeleteCategory }
          onAddItem={ onAddRelationship }
          onEditItem={ onEditRelationship }
          onDeleteItem={ onDeleteRelationship }
        />
      </ListCardWrapper>
    );
  }

  render() {
    const { categories } = this.props;
    const renderedCategories = chunk(categories, 2).map(this.rowOfCategories);

    return (
      <div>
        { renderedCategories ? renderedCategories : null }
      </div>
    );
  }
}

RelationshipCategories.propTypes = {
	// categories: PropTypes.array,
	onEditCategory: PropTypes.func,
	onDeleteCategory: PropTypes.func,
	onAddRelationship: PropTypes.func,
	onEditRelationship: PropTypes.func,
	onDeleteRelationship: PropTypes.func,
};

export default RelationshipCategories;
