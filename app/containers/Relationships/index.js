/*
 *
 * Relationships
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectRelationships from './selectors';

import {
  addCategory, editCategory, deleteCategory,
  addRelationship, editRelationship, deleteRelationship
} from './actions';

import Title from 'components/DashboardInner/Title';
import RelationshipCategories from 'components/RelationshipCategories';
import AddCategory from 'components/AddCategory';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import RelationshipsHelp from 'components/HelpView/RelationshipsHelp';


export class Relationships extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      onAddCategory,
      onEditCategory,
      onDeleteCategory,
      onAddRelationship,
      onEditRelationship,
      onDeleteRelationship
    } = this.props;
    const { categories } = this.props.Relationships;

    return (
      <div>
        <FormView>
          <Title>Key Relationships</Title>
          <AddCategory onAddCategory={ onAddCategory } />
          <RelationshipCategories
            categories={ categories }
            onEditCategory={ onEditCategory }
            onDeleteCategory={ onDeleteCategory }
            onAddRelationship={ onAddRelationship }
            onEditRelationship={ onEditRelationship }
            onDeleteRelationship={ onDeleteRelationship }
          />
        </FormView>
        <HelpView>
          <RelationshipsHelp />
        </HelpView>
      </div>
    );
  }
}

Relationships.propTypes = {
  onAddCategory: PropTypes.func,
  onEditCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
  onAddRelationship: PropTypes.func,
  onEditRelationship: PropTypes.func,
  onDeleteRelationship: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Relationships: makeSelectRelationships(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddCategory: (categoryName) => dispatch(addCategory(categoryName)),
    onEditCategory: (index, categoryName) => dispatch(editCategory(index, categoryName)),
    onDeleteCategory: (index) => dispatch(deleteCategory(index)),
    onAddRelationship: (categoryId, content) => dispatch(addRelationship(categoryId, content)),
    onEditRelationship: (categoryId, relationshipId, content) => dispatch(editRelationship(categoryId, relationshipId, content)),
    onDeleteRelationship: (categoryId, relationshipId) => dispatch(deleteRelationship(categoryId, relationshipId)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Relationships);
