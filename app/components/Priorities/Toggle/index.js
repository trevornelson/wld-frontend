/**
*
* PrioritiesToggle
*
*/

import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin: 15px 0px;
  border-radius: 3px;
  color: ${ colors.text.body };

  button {
    width: 33%;
    text-align: center;
  }

  :first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid ${ colors.darkBlue };
  }

  :nth-child(2) {
    border-top: 1px solid ${ colors.darkBlue };
    border-bottom: 1px solid ${ colors.darkBlue };
  }

  :last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid ${ colors.darkBlue };
  }

  .selected {
    color: ${ colors.background.light };
    background: ${ colors.darkBlue };
  }
`

class PrioritiesToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { view, onSelectView } = this.props;

    return (
      <Wrapper>
      	<button className={ view === 'quarter' ? 'selected' : '' } onClick={ partial(onSelectView, 'quarter') }>Quarter</button>
      	<button className={ view === 'week' ? 'selected' : '' } onClick={ partial(onSelectView, 'week') }>Week</button>
      	<button className={ view === 'day' ? 'selected' : '' } onClick={ partial(onSelectView, 'day') }>Day</button>
      </Wrapper>
    );
  }
}

PrioritiesToggle.propTypes = {
  view: PropTypes.string,
	onSelectView: PropTypes.func
};

export default PrioritiesToggle;
