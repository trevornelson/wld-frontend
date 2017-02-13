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
  display: inline-block;
  background: #DADFE1;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #6C7A89;
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

    if (categories.length) {
      return (
        <Wrapper>
        { categories.map((category, index) => {
        		return (
              <ListCardWrapper key={ category.name + index }>
          			<ListCard
                  isListEditable={ true }
                  canAddItems={ true }
    	      			title={ category.name }
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
    } else {
      return <div />
    }
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
