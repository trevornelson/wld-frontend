import React from 'react';

export class HelpIcon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span>
        <i className="fa fa-info-circle" />
        <span>Help</span>
      </span>
    );
  }
}

export default HelpIcon;
