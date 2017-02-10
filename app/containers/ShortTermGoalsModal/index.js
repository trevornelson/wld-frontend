/*
 *
 * ShortTermGoalsModal
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { partial } from 'lodash';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-modal';

import { makeSelectAssociatedLongTermGoals } from 'containers/LongTermGoals/selectors';
import MenuList from 'components/Sidebar/MenuList';
import MenuListItem from 'components/Sidebar/MenuListItem';

export class ShortTermGoalsModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isOpen, pendingGoal, pendingCategory, longTermGoals, onAssignGoal, onCloseModal } = this.props;

    return (
      <Modal
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        contentLabel="Modal"
      >
        <button onClick={ onCloseModal }>Close</button>
        <h3>{ pendingCategory }</h3>
        <div>{ pendingGoal }</div>
        <MenuList>
        {
          longTermGoals.map((longGoal, i) => {
            return (
              <MenuListItem
                key={ i }
                onClick={ partial(onAssignGoal, pendingCategory, pendingGoal, longGoal.text) }
              >
                { longGoal.text }
              </MenuListItem>
            );
          })
        }
        </MenuList>
      </Modal>
    );
  }
}

ShortTermGoalsModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  longTermGoals: makeSelectAssociatedLongTermGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortTermGoalsModal);
