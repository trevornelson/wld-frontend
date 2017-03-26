/*
 *
 * Core
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCore from './selectors';

import { changeCorePurpose, changeCoreValue, toggleCoreHelpView } from './actions';

import Title from 'components/DashboardInner/Title';
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import CorePurpose from 'components/Core/CorePurpose';
import CoreValues from 'components/Core/CoreValues';

export class Core extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      Core,
      onCorePurposeChange,
      onCoreValueChange,
      onToggleHelpView
    } = this.props;
    const { corePurpose, coreValues, activeHelpView } = Core;

    return (
      <div>
        <FormView>
          <Title>Core Values & Purpose</Title>
          <CorePurpose
            purposeText={ corePurpose }
            handleChange={ onCorePurposeChange }
            handleFocus={ onToggleHelpView }
          />
          <CoreValues
            coreValues={ coreValues }
            handleChange={ onCoreValueChange }
            handleFocus={ onToggleHelpView }
          />
        </FormView>
        
        <HelpView activeHelpView={ activeHelpView } />
      </div>
    );
  }
}

Core.propTypes = {
  onCorePurposeChange: PropTypes.func,
  onCoreValueChange: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Core: makeSelectCore(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCorePurposeChange: (e) => dispatch(changeCorePurpose(e.target.value)),
    onCoreValueChange: (valueId, userId, valueText) => dispatch(changeCoreValue(valueId, userId, valueText)),
    onToggleHelpView: (view) => dispatch(toggleCoreHelpView(view)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Core);
