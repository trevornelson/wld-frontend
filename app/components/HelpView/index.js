/**
*
* HelpView
*
*/

import React, { PropTypes } from 'react';
import { slide as HelpMenu } from 'react-burger-menu';

import HelpWrapper from './HelpWrapper';
import HelpIcon from './HelpIcon';
import CloseIcon from './CloseIcon';

class HelpView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  onStateChange = (menuState) => {
    this.setState({ isOpen: menuState.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <HelpWrapper isOpen={ isOpen }>
        <HelpMenu
          right
          width={ '50%' }
          isOpen={ isOpen }
          onStateChange={ this.onStateChange }
          customBurgerIcon={ <HelpIcon /> }
          customCrossIcon={ <CloseIcon /> }
          noOverlay
        >
          { this.props.children }
        </HelpMenu>
      </HelpWrapper>
    );
  }
}

export default HelpView;
