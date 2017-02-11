/**
*
* PrioritiesToggle
*
*/

import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
`

class PrioritiesToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { onSelectView } = this.props;

    return (
      <div>
      	<button onClick={ partial(onSelectView, 'quarter') }>Quarter</button>
      	<button onClick={ partial(onSelectView, 'week') }>Week</button>
      	<button onClick={ partial(onSelectView, 'day') }>Day</button>
      </div>
    );
  }
}

PrioritiesToggle.propTypes = {
	onSelectView: PropTypes.func
};

export default PrioritiesToggle;
