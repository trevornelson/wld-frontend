/**
*
* DayToggle
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;

  .left {
    float: left;
  }

  .right {
    float: right;
  }
`;

class DayToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dayOfWeek, onIncr, onDecr } = this.props;
    const isSunday = dayOfWeek === 0;
    const isSaturday = dayOfWeek === 6;

    return (
      <Wrapper>
        { isSunday ? null : <button className="left" onClick={ onDecr }><span className="fa fa-caret-square-o-left" /></button> }
        { isSaturday ? null : <button className="right" onClick={ onIncr }><span className="fa fa-caret-square-o-right" /></button> }
      </Wrapper>
    );
  }
}

DayToggle.propTypes = {
  dayOfWeek: PropTypes.number,
  onIncr: PropTypes.func,
  onDecr: PropTypes.func
};

export default DayToggle;
