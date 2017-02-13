/**
*
* PrioritiesToggle
*
*/

import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  background: #DADFE1;
  box-shadow: 2px 2px 2px #6C7A89;
  border-radius: 3px;
  color: #494949;

  button {
    width: 70px;
    text-align: center;
  }

  :first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid #494949;
  }

  :nth-child(2) {
    border-top: 1px solid #494949;
    border-bottom: 1px solid #494949;
  }

  :last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #494949;
  }

  .selected {
    background: #ABB7B7;
    box-shadow: inset 3px 3px 3px #494949;
  }
`

class PrioritiesToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { view, onSelectView } = this.props;
    console.log(view);

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
