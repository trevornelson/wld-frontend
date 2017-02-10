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

import Title from 'components/Dashboard/Title';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import RelationshipCategories from 'components/RelationshipCategories';
import AddCategory from 'components/AddCategory';

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
    onAddRelationship: (categoryIndex, text) => dispatch(addRelationship(categoryIndex, text)),
    onEditRelationship: (categoryIndex, relationshipIndex, text) => dispatch(editRelationship(categoryIndex, relationshipIndex, text)),
    onDeleteRelationship: (categoryIndex, relationshipIndex) => dispatch(deleteRelationship(categoryIndex, relationshipIndex)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Relationships);
