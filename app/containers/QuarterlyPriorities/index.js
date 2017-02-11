/*
 *
 * QuarterlyPriorities
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectQuarterlyPriorities } from 'containers/Priorities/selectors';
import { addQuarterly, editQuarterly, deleteQuarterly } from 'containers/Priorities/actions';

import Quarterly from 'components/Priorities/Quarterly';

export class QuarterlyPriorities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      quarterlyPriorities,
      onAddQuarterly,
      onEditQuarterly,
      onDeleteQuarterly
    } = this.props;

    return (
      <div>
        <h3>Quarterly Priorities</h3>
        <div>
          <Quarterly
            category="Open"
            priorities={ quarterlyPriorities }
            onAddQuarterly={ onAddQuarterly }
            onEditQuarterly={ onEditQuarterly }
            onDeleteQuarterly={ onDeleteQuarterly }
          />
          <Quarterly
            category="Ongoing"
            priorities={ quarterlyPriorities }
            onAddQuarterly={ onAddQuarterly }
            onEditQuarterly={ onEditQuarterly }
            onDeleteQuarterly={ onDeleteQuarterly }
          />
        </div>
        <div>
          <Quarterly
            category="Done"
            priorities={ quarterlyPriorities }
            onAddQuarterly={ onAddQuarterly }
            onEditQuarterly={ onEditQuarterly }
            onDeleteQuarterly={ onDeleteQuarterly }
          />
          <Quarterly
            category="Hold"
            priorities={ quarterlyPriorities }
            onAddQuarterly={ onAddQuarterly }
            onEditQuarterly={ onEditQuarterly }
            onDeleteQuarterly={ onDeleteQuarterly }
          />
        </div>
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
