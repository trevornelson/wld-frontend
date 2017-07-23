/*
 *
 * QuarterlyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { chunk } from 'lodash';
import styled from 'styled-components';

import Quarterly from 'components/Priorities/Quarterly';
import ListCardRow from 'components/ListCard/ListCardRow';
import { makeSelectQuarterlyPriorities } from 'containers/Priorities/selectors';
import { addQuarterly, editQuarterly, deleteQuarterly } from 'containers/Priorities/actions';

export class QuarterlyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderRow(groups) {
    const {
      onAddQuarterly,
      onEditQuarterly,
      onDeleteQuarterly
    } = this.props;

    return groups.map(({ category, priorities }) => {
      return (
        <Quarterly
          key={ category }
          category={ category }
          priorities={ priorities }
          onAddQuarterly={ onAddQuarterly }
          onEditQuarterly={ onEditQuarterly }
          onDeleteQuarterly={ onDeleteQuarterly }
        />
      );
    });
  }

  render() {
    const { quarterlyPriorities } = this.props;

    return (
      <div>
      {
        chunk(quarterlyPriorities, 2).map((groups, index) => {
          return (
            <ListCardRow key={ index }>
            { this.renderRow(groups) }
            </ListCardRow>
          );
        })
      }
      </div>
    );
  }
}

QuarterlyPriorities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quarterlyPriorities: makeSelectQuarterlyPriorities(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddQuarterly: (category, priority) => dispatch(addQuarterly(category, priority)),
    onEditQuarterly: (category, index, priority) => dispatch(editQuarterly(category, index, priority)),
    onDeleteQuarterly: (category, index) => dispatch(deleteQuarterly(category, index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuarterlyPriorities);
