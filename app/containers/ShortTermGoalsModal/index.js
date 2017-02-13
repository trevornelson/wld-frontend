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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100
  }
};

export class ShortTermGoalsModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isOpen, pendingGoal, pendingCategory, longTermGoals, onAssignGoal, onCloseModal } = this.props;

    return (
      <Modal
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        contentLabel="Modal"
        style={ customStyles }
      >
        <div style={ { minWidth: '300px' } }>
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
        </div>
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
