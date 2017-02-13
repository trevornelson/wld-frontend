/**
*
* RelationshipCategories
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ListCard from 'components/ListCard';
import ListCardWrapper from './ListCardWrapper';

const Wrapper = styled.div`
`;

class RelationshipCategories extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
  	const {
  		categories,
  		onEditCategory,
  		onDeleteCategory,
  		onAddRelationship,
  		onEditRelationship,
  		onDeleteRelationship
  	} = this.props;

    return (
      <Wrapper>
      { categories.map((category, index) => {
      		return (
            <ListCardWrapper key={ category }>
        			<ListCard
                isListEditable={ true }
                canAddItems={ true }
  	      			title={ category.name }
  	      			key={ category.name + index }
  	      			index={ index }
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
      	})
      }
      </Wrapper>
    );
  }
}

RelationshipCategories.propTypes = {
	categories: PropTypes.array,
	onEditCategory: PropTypes.func,
	onDeleteCategory: PropTypes.func,
	onAddRelationship: PropTypes.func,
	onEditRelationship: PropTypes.func,
	onDeleteRelationship: PropTypes.func,
};

export default RelationshipCategories;
