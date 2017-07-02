/*
 *
 * Affirmations
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactS3Uploader from 'react-s3-uploader';
import api from 'services/wld-api';
import makeSelectAffirmations from './selectors';
import {
  addAffirmation,
  editAffirmation,
  deleteAffirmation
} from './actions';

import Title from 'components/DashboardInner/Title';
import ListCard from 'components/ListCard';
import ListCardWrapper from './ListCardWrapper';

export class Affirmations extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      onAddAffirmation,
      onEditAffirmation,
      onDeleteAffirmation
    } = this.props;
    const { affirmations } = this.props.Affirmations;

    return (
      <div>
        <Title>Daily Affirmations</Title>
        <ListCardWrapper>
          <ListCard
            isListEditable={ false }
            canAddItems={ affirmations.length <= 10 }
            items={ affirmations }
            itemPlaceholder="Add an affirmation..."
            onAddItem={ onAddAffirmation }
            onEditItem={ onEditAffirmation }
            onDeleteItem={ onDeleteAffirmation }
          />
        </ListCardWrapper>
      </div>
    );
  }
}

Affirmations.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Affirmations: makeSelectAffirmations()
});

function mapDispatchToProps(dispatch) {
  return {
    onAddAffirmation: (_, content) => dispatch(addAffirmation(content)),
    onEditAffirmation: (_, id, content) => dispatch(editAffirmation(id, content)),
    onDeleteAffirmation: (_, id) => dispatch(deleteAffirmation(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Affirmations);
