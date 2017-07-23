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

import Title from 'components/DashboardInner/Title';
import CategoryWrapper from 'components/LongGoals/CategoryWrapper';
import ListCard from 'components/ListCard';
import ListCardWrapper from 'components/LongGoals/ListCardWrapper';
import InputLabel from 'components/InputLabel';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import LongTermHelp from 'components/HelpView/LongTermHelp';

export class LongTermGoals extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onEditGoal, onAddGoal, onDeleteGoal } = this.props;
    const categories = this.props.LongTermGoals;

    return (
      <div>
        <FormView>
          <Title>Long Term Goals</Title>
          {
            categories.map((category) => {
              return (
                <CategoryWrapper key={ category.name }>
                  <InputLabel>{ category.name }</InputLabel>
                  {
                    category.timeframes.map((timeframe) => {
                      return (
                        <ListCardWrapper key={ `${category.name}-${timeframe.name}` }>
                          <ListCard
                            isListEditable={ false }
                            canAddItems={ true }
                            title={ `${timeframe.name} Year` }
                            index={ [category.name, timeframe.name] }
                            items={ timeframe.goals }
                            itemPlaceholder={ `Add a ${category.name} goal...` }
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
        </FormView>
        <HelpView>
          <LongTermHelp />
        </HelpView>
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
    onEditGoal: (category, id, goal) => dispatch(editGoal(category, id, goal)),
    onAddGoal: (category, goal) => dispatch(addGoal(category, goal)),
    onDeleteGoal: (category, id) => dispatch(deleteGoal(category, id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermGoals);
