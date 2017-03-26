/*
 *
 * ShortTermGoals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { createStructuredSelector } from 'reselect';
import makeSelectShortTermGoals from './selectors';
import styled from 'styled-components';

import { addGoal, assignGoal, editGoal, deleteGoal, closeModal } from './actions';

import ShortTermGoalsModal from 'containers/ShortTermGoalsModal';
import Title from 'components/DashboardInner/Title';
import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/ShortGoals/ListCardWrapper';

const Container = styled.div`
  display: inline-block;
  background: #DADFE1;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #6C7A89;
`;

export class ShortTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onAddGoal, onAssignGoal, onEditGoal, onDeleteGoal, onCloseModal } = this.props;
    const { goals, isModalOpen, pendingGoal, pendingCategory } = this.props.ShortTermGoals;

    return (
      <div>
        <Title>Short Term Goals</Title>
        <Container>
        {
          ['Personal', 'Family', 'Business', 'Community'].map((category) => {
            return (
              <ListCardWrapper key={ category }>
                <ListCard
                  isListEditable={ false }
                  canAddItems={ true }
                  title={ category }
                  index={ category }
                  items={ goals[category] }
                  itemPlaceholder={ `Add a ${category} Goal...` }
                  onAddItem={ onAddGoal }
                  onEditItem={ onEditGoal }
                  onDeleteItem={ onDeleteGoal }
                />
              </ListCardWrapper>
            );
          })
        }
        </Container>
        <ShortTermGoalsModal
          isOpen={ isModalOpen }
          pendingCategory={ pendingCategory }
          pendingGoal={ pendingGoal }
          onCloseModal={ onCloseModal }
          onAssignGoal={ onAssignGoal }
        />
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
    onAddGoal: (category, goal) => dispatch(addGoal(category, goal)),
    onAssignGoal: (category, goal, longTermGoal) => dispatch(assignGoal(category, goal, longTermGoal)),
    onEditGoal: (category, index, goal) => dispatch(editGoal(category, index, goal)),
    onDeleteGoal: (category, index) => dispatch(deleteGoal(category, index)),
    onCloseModal: () => dispatch(closeModal()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortTermGoals);
