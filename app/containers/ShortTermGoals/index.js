/*
 *
 * ShortTermGoals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { chunk } from 'lodash';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import makeSelectShortTermGoals from './selectors';
import styled from 'styled-components';

import { addGoal, assignGoal, editGoal, deleteGoal, closeModal } from './actions';

import ShortTermGoalsModal from 'containers/ShortTermGoalsModal';
import Title from 'components/DashboardInner/Title';
import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/LongGoals/ListCardWrapper';
import CategoryWrapper from 'components/LongGoals/CategoryWrapper';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import ShortTermHelp from 'components/HelpView/ShortTermHelp';
import InputLabel from 'components/InputLabel';

export class ShortTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  categoryCard = (category, index) => {
    const {
      onAddGoal,
      onAssignGoal,
      onEditGoal,
      onDeleteGoal,
      onCloseModal
    } = this.props;

    return (
      <CategoryWrapper key={ category.name }>
        <InputLabel>{ category.name }</InputLabel>
        <ListCardWrapper>
          <ListCard
            isListEditable={ false }
            canAddItems={ true }
            index={ category.name }
            items={ category.goals }
            itemPlaceholder={ `Add a ${category.name} Goal...` }
            onAddItem={ onAddGoal }
            onEditItem={ onEditGoal }
            onDeleteItem={ onDeleteGoal }
          />
        </ListCardWrapper>
      </CategoryWrapper>
    );
  }

  render() {
    const {
      onAddGoal,
      onAssignGoal,
      onEditGoal,
      onDeleteGoal,
      onCloseModal
    } = this.props;
    const {
      categories,
      isModalOpen,
      pendingGoal,
      pendingCategory
    } = this.props.ShortTermGoals;

    return (
      <div>
        <FormView>
          <Title>Short Term Goals</Title>
          { categories.map(this.categoryCard) }
          <ShortTermGoalsModal
            isOpen={ isModalOpen }
            pendingCategory={ pendingCategory }
            pendingGoal={ pendingGoal }
            onCloseModal={ onCloseModal }
            onAssignGoal={ onAssignGoal }
          />
        </FormView>
        <HelpView>
          <ShortTermHelp />
        </HelpView>
      </div>
    );
  }
}

ShortTermGoals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ShortTermGoals: makeSelectShortTermGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddGoal: (category, content) => dispatch(addGoal(category, content)),
    onAssignGoal: (category, content, longTermGoal) => dispatch(assignGoal(category, content, longTermGoal)),
    onEditGoal: (category, id, content) => dispatch(editGoal(category, id, content)),
    onDeleteGoal: (category, id) => dispatch(deleteGoal(category, id)),
    onCloseModal: () => dispatch(closeModal()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortTermGoals);
