/*
 *
 * LongTermGoals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLongTermGoals from './selectors';

import { editGoal, addGoal, deleteGoal } from './actions';

import Title from 'components/Dashboard/Title';
import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/LongGoals/ListCardWrapper';
import CategoryWrapper from 'components/LongGoals/CategoryWrapper';
import InputLabel from 'components/InputLabel';

export class LongTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onEditGoal, onAddGoal, onDeleteGoal } = this.props;
    const { goals } = this.props.LongTermGoals;

    return (
      <div>
        <Title>Long Term Goals</Title>
        {
          ['Personal', 'Family', 'Business', 'Community'].map((category) => {
            return (
              <CategoryWrapper key={ category }>
                <InputLabel>{ category }</InputLabel>
                {
                  ['3', '5', '10'].map((year) => {
                    return (
                      <ListCardWrapper key={ `${category}-${year}` }>
                        <ListCard
                          isListEditable={ false }
                          canAddItems={ true }
                          title={ `${year} Year` }
                          index={ [category, year] }
                          items={ goals[category][year] }
                          itemPlaceholder={ `Add a ${category} Goal...` }
                          onAddItem={ onAddGoal }
                          onEditItem={ onEditGoal }
                          onDeleteItem={ onDeleteGoal }
                        />
                      </ListCardWrapper>
                    );
                  })
                }
              </CategoryWrapper>
            );
          })
        }
      </div>
    );
  }
}

LongTermGoals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LongTermGoals: makeSelectLongTermGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditGoal: (category, index, goal) => dispatch(editGoal(category, index, goal)),
    onAddGoal: (category, goal) => dispatch(addGoal(category, goal)),
    onDeleteGoal: (category, index) => dispatch(deleteGoal(category, index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermGoals);
