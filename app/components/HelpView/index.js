/**
*
* HelpView
*
*/

import React from 'react';

import HelpWrapper from 'components/HelpView/HelpWrapper';


class HelpView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HelpWrapper>
      	{ this.props.children }
      </HelpWrapper>
    );
  }
}

HelpView.propTypes = {

};

export default HelpView;
