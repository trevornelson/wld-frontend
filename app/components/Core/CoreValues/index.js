/**
*
* CoreValues
*
*/

import React, { PropTypes } from 'react';
import { bind, partial } from 'lodash';

import {
	CORE_VALUE_INDEXES,
	CORE_VALUES_FOCUSED
} from 'containers/App/constants';

import TextInput from 'components/TextInput';
import InputLabel from 'components/InputLabel';


class CoreValues extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleCoreValueChange(valueIndex, e) {
  	this.props.handleChange(valueIndex, e.target.value);
  }

  render() {
  	const { coreValues, handleFocus } = this.props;
  	var alreadyRenderedEmpty = false;

    return (
      <div>
      	<InputLabel>Core Values:</InputLabel>
      	{ CORE_VALUE_INDEXES.map((i) => {
      			if (!coreValues[i]) {
      				if (alreadyRenderedEmpty) {
      					return null;
      				} else {
      					alreadyRenderedEmpty = true;
      				}
      			}
      			return (<TextInput key={ i }>
              <input
  		      		type="text"
  		      		key={ i }
  		      		defaultValue={ coreValues[i] }
  		      		placeholder="enter a core value..."
  		      		onChange={ bind(this.handleCoreValueChange, this, i) }
  		      		onFocus={ partial(handleFocus, CORE_VALUES_FOCUSED) }
  		      		onBlur={ partial(handleFocus, '') }
              />
						</TextInput>);
      		})
      	}
      </div>
    );
  }
}

CoreValues.propTypes = {
	coreValues: PropTypes.object,
	handleChange: PropTypes.func,
	handleFocus: PropTypes.func
};

export default CoreValues;
