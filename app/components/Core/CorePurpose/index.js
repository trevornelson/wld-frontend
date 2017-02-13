/**
*
* CorePurpose
*
*/

import React from 'react';
import { partial } from 'lodash';

import {
  CORE_PURPOSE_FOCUSED
} from 'containers/App/constants';

import TextInput from 'components/TextInput';
import InputLabel from 'components/InputLabel';

class CorePurpose extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { purposeText, handleChange, handleFocus } = this.props;

    return (
      <div>
      	<InputLabel>Core Purpose:</InputLabel>
      	<TextInput>
          <input
        		type="text"
        		name="purpose"
        		defaultValue={ purposeText }
        		placeholder="enter your core purpose..."
        		onChange={ handleChange }
            onFocus={ partial(handleFocus, CORE_PURPOSE_FOCUSED) }
            onBlur={ partial(handleFocus, '') }
          />
        </TextInput>
      </div>
    );
  }
}

CorePurpose.propTypes = {
	purposeText: React.PropTypes.string,
	handleChange: React.PropTypes.func
};

export default CorePurpose;
