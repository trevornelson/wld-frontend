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
  handleCoreValueCreate(e) {
    this.props.handleCreate(e.target.value);
  }

  handleCoreValueChange(valueId, userId, e) {
  	this.props.handleChange(valueId, userId, e.target.value);
  }

  render() {
  	const { coreValues, handleFocus } = this.props;

    return (
      <div>
      	<InputLabel>Core Values:</InputLabel>
        {
          coreValues.map((value) => {
            return (
              <TextInput key={ value.id }>
                <input
                  type="text"
                  defaultValue={ value.content }
                  placeholder="enter a core value..."
                  onChange={ bind(this.handleCoreValueChange, this, value.id, value.user_id) }
                  onFocus={ partial(handleFocus, CORE_VALUES_FOCUSED) }
                  onBlur={ partial(handleFocus, '') }
                />
              </TextInput>
            );
          })
        }
      </div>
    );
  }
}

CoreValues.propTypes = {
	coreValues: PropTypes.array,
	handleChange: PropTypes.func,
	handleFocus: PropTypes.func
};

export default CoreValues;
